import { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from './prisma';
import { User } from '@prisma/client';

export const authOptions: AuthOptions = {
    debug: true,
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            if (user.email) {
                const dbUser = await prisma.user.findUnique({
                    where: { email: user.email },
                    select: { id: true, onboardingCompleted: true },
                });

                if (!dbUser) {
                    // New user, create record with onboardingCompleted set to false
                    await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name,
                            onboardingCompleted: false,
                        },
                    });
                    return true;
                }

                // Existing user, do nothing
                // in this place referesh token and access tokens should be updated
                return true;
            }
            return false;
        },
        async jwt({ token, user }) {
            if (user?.email) {
                const dbUser = await prisma.user.findUnique({
                    where: { email: user.email },
                    select: { onboardingCompleted: true },
                });
                token.name = user.name;
                token.onboardingCompleted =
                    dbUser?.onboardingCompleted ?? false;
            }
            return token;
        },
        async session({ session, token, user }) {
            console.log('user', user);
            if (session && user) {
                session.user = token.user as User;
            }
            return session;
        },
    },
};
