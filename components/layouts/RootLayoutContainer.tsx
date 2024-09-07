'use client';

import React from 'react';
import { Navbar } from '../Navbar';

interface ContainerProps {
    children: React.ReactNode;
}

export const RootLayoutContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <main className="min-h-screen min-w-full flex flex-col">
            <Navbar />
            {children}
        </main>
    );
};
