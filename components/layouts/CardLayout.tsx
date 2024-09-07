'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Transition } from '../Transition';
import { cn } from '@/lib/utils';

interface CardLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const CardLayout: React.FC<CardLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <Transition
            className={cn(
                'flex flex-grow min-w-screen px-0 sm:px-5 -translate-y-10',
                className
            )}
        >
            <Card className="mx-5 mt-5 w-full shadow-xl">{children}</Card>
        </Transition>
    );
};
