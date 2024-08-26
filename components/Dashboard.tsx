'use client';

import { Divider, Title } from '@mantine/core';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div>
            <Title order={3}>Top Books Launching Today</Title>
            <Divider my={'md'} />
        </div>
    );
};
