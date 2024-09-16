import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import { RootLayoutContainer } from '@/components/layouts/RootLayoutContainer';
import { Inter as FontSans } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

const fontPlayFairDisplay = Playfair_Display({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Story Trail',
    description: 'Share short stories, summaries and get featured',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-playfair antialiased',
                    fontPlayFairDisplay.className
                )}
            >
                <Providers>
                    <RootLayoutContainer>{children}</RootLayoutContainer>
                </Providers>
            </body>
        </html>
    );
}
