'use client';

import { motion } from 'framer-motion';

interface TransitionProps {
    children: React.ReactNode;
    className?: string;
}

export const Transition: React.FC<TransitionProps> = ({
    children,
    className,
}) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
