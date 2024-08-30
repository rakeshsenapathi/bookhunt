'use client';

import { m as motion, AnimatePresence } from 'framer-motion';
import { Separator } from './ui/separator';
import { Transition } from './Transition';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div className="px-8 py-4">
            <h1 className="text-3xl font-bold">
                Featuring Top Stories for today
            </h1>
            <Separator className="mt-4" />
        </div>
    );
};
