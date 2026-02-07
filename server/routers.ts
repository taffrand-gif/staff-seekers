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
});

export type AppRouter = typeof appRouter;
