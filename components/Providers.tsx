'use client';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

interface Props {
    children: ReactNode;
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

const Providers: FC<Props> = ({ children }: Props) => (
    <ThemeProvider enableSystem={false} disableTransitionOnChange>
        <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
);

export default Providers;
