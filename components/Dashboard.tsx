'use client';

import { Divider, Group, Stack, Title } from '@mantine/core';
import { m as motion } from 'framer-motion';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <Stack>
            <Title order={3}>Featuring Top Stories for today</Title>
            <Divider />
        </Stack>
    );
};
