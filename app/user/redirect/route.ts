import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user.onboardingCompleted) {
        return NextResponse.redirect(
            new URL('/user/welcome', process.env.NEXTAUTH_URL)
        );
    } else {
        return NextResponse.redirect(new URL('/', process.env.NEXTAUTH_URL));
    }
}
