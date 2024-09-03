'use client';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Props {
    children: ReactNode;
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

const Providers: FC<Props> = ({ children }: Props) => (
    <ThemeProvider enableSystem={false} disableTransitionOnChange>
        <TooltipProvider>
            <DndProvider backend={HTML5Backend}>
                <SessionProvider>{children}</SessionProvider>
            </DndProvider>
        </TooltipProvider>
    </ThemeProvider>
);

export default Providers;
