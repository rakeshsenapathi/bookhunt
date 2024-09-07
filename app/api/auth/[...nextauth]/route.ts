import NextAuth, { DefaultSession } from 'next-auth';
import { authOptions } from '@/auth';
declare module 'next-auth' {
    interface Session {
        user: {
            onboardingCompleted?: boolean;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth' {
    interface JWT {
        onboardingCompleted?: boolean;
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
