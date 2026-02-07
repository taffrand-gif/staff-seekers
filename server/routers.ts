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
