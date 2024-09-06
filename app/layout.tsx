import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import { Container } from '@/components/Container';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
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
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Providers>
                    <Container>{children}</Container>
                </Providers>
            </body>
        </html>
    );
}
