import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  chat: router({
    sendMessage: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        const { name, message } = input;
        
        // Envoyer notification au propriétaire
        const success = await notifyOwner({
          title: `💬 Nouveau message chat - ${name}`,
          content: `**De:** ${name}\n**Message:**\n${message}`,
        });
        
        return { success };
      }),
  }),

  contact: router({
    sendMessage: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        const { name, email, phone, message } = input;
        
        // Envoyer notification au propriétaire
        const success = await notifyOwner({
          title: `Nouveau message de contact - ${name}`,
          content: `**Nom:** ${name}\n**Email:** ${email}\n**Téléphone:** ${phone}\n\n**Message:**\n${message}`,
        });
        
        return { success };
      }),
  }),

  bookings: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        serviceType: z.string().min(1),
        address: z.string().min(1),
        city: z.string().min(1),
        preferredDate: z.string(),
        preferredTime: z.string(),
        description: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { getDb } = await import("./db");
        const { bookings } = await import("../drizzle/schema");
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const booking = await db.insert(bookings).values({
          ...input,
          preferredDate: new Date(input.preferredDate),
        });
        
        // Notifier le propriétaire
        await notifyOwner({
          title: `📅 Nouvelle réservation - ${input.name}`,
          content: `**Nom:** ${input.name}\n**Email:** ${input.email}\n**Téléphone:** ${input.phone}\n**Service:** ${input.serviceType}\n**Ville:** ${input.city}\n**Date:** ${input.preferredDate}\n**Heure:** ${input.preferredTime}\n\n**Description:**\n${input.description || "Aucune description"}`,
        });
        
        return { success: true };
      }),
    
    list: publicProcedure.query(async () => {
      const { getDb } = await import("./db");
      const { bookings } = await import("../drizzle/schema");
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      return db.select().from(bookings).orderBy(bookings.createdAt);
    }),
    
    getAvailableSlots: publicProcedure
      .input(z.object({
        date: z.string(), // Format: YYYY-MM-DD
      }))
      .query(async ({ input }) => {
        const { getDb } = await import("./db");
        const { bookings } = await import("../drizzle/schema");
        const { eq, and, gte, lt } = await import("drizzle-orm");
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        // Tous les créneaux possibles
        const allSlots = [
          "09:00-10:00",
          "10:00-11:00",
          "11:00-12:00",
          "12:00-13:00",
          "14:00-15:00",
          "15:00-16:00",
          "16:00-17:00",
          "17:00-18:00",
        ];
        
        // Récupérer les réservations pour cette date
        const startOfDay = new Date(input.date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(input.date);
        endOfDay.setHours(23, 59, 59, 999);
        
        const existingBookings = await db
          .select()
          .from(bookings)
          .where(
            and(
              gte(bookings.preferredDate, startOfDay),
              lt(bookings.preferredDate, endOfDay),
              eq(bookings.status, "pending") // Ne compter que les réservations actives
            )
          );
        
        // Créneaux déjà réservés
        const bookedSlots = existingBookings.map(b => b.preferredTime);
        
        // Créneaux disponibles
        const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));
        
        return { availableSlots };
      }),
  }),

  gallery: router({
    list: publicProcedure.query(async () => {
      const { getDb } = await import("./db");
      const { galleryPhotos } = await import("../drizzle/schema");
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      return db.select().from(galleryPhotos).orderBy(galleryPhotos.displayOrder);
    }),
  }),

  quotes: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        city: z.string().min(1),
        address: z.string().optional(),
        serviceType: z.string().min(1),
        urgency: z.enum(["normal", "urgent"]).default("normal"),
        description: z.string().min(10),
        photoUrls: z.array(z.string()).optional(),
      }))
      .mutation(async ({ input }) => {
        const { getDb } = await import("./db");
        const { quoteRequests } = await import("../drizzle/schema");
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const photoUrlsJson = input.photoUrls ? JSON.stringify(input.photoUrls) : null;
        
        const quote = await db.insert(quoteRequests).values({
          ...input,
          photoUrls: photoUrlsJson,
        });
        
        // Notifier le propriétaire
        const urgencyEmoji = input.urgency === "urgent" ? "🚨" : "📝";
        await notifyOwner({
          title: `${urgencyEmoji} Nouvelle demande de devis - ${input.name}`,
          content: `**Nom:** ${input.name}\n**Email:** ${input.email}\n**Téléphone:** ${input.phone}\n**Ville:** ${input.city}\n**Service:** ${input.serviceType}\n**Urgence:** ${input.urgency === "urgent" ? "🚨 URGENT" : "Normale"}\n\n**Description:**\n${input.description}${input.photoUrls && input.photoUrls.length > 0 ? `\n\n**Photos jointes:** ${input.photoUrls.length}` : ""}`,
        });
        
        return { success: true };
      }),
    
    list: publicProcedure.query(async () => {
      const { getDb } = await import("./db");
      const { quoteRequests } = await import("../drizzle/schema");
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      return db.select().from(quoteRequests).orderBy(quoteRequests.createdAt);
    }),
  }),

  reviews: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email().optional(),
        city: z.string().min(1),
        rating: z.number().min(1).max(5),
        comment: z.string().min(10),
        serviceType: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { getDb } = await import("./db");
        const { reviews } = await import("../drizzle/schema");
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const review = await db.insert(reviews).values(input);
        
        // Notifier le propriétaire
        await notifyOwner({
          title: `⭐ Nouvel avis - ${input.rating}/5 étoiles`,
          content: `**Nom:** ${input.name}\n**Ville:** ${input.city}\n**Note:** ${"⭐".repeat(input.rating)}\n\n**Commentaire:**\n${input.comment}`,
        });
        
        return { success: true };
      }),
    
    list: publicProcedure.query(async () => {
      const { getDb } = await import("./db");
      const { reviews } = await import("../drizzle/schema");
      const { eq } = await import("drizzle-orm");
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      // Ne retourner que les avis approuvés
      return db.select().from(reviews).where(eq(reviews.isApproved, 1)).orderBy(reviews.createdAt);
    }),
  }),
});

export type AppRouter = typeof appRouter;
