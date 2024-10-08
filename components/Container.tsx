'use client';

import { Separator } from '@radix-ui/react-dropdown-menu';
import { Navbar } from './Navbar';

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <main className="min-h-screen min-w-full flex flex-col">
            <Navbar />
            {children}
        </main>
    );
};
