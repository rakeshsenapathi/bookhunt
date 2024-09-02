'use client';

import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import { Transition } from './Transition';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <Transition>
            <div className="px-5 sm:px-6 py-4">
                <h1 className="text-xl font-bold md:text-3xl">
                    Featuring Top Stories for today
                </h1>
                <Separator className="mt-4" />
            </div>
        </Transition>
    );
};
