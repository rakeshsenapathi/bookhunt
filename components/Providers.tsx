'use client';
import { MantineProvider, createTheme } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const theme = createTheme({
    black: 'black',
});

const Providers: FC<Props> = ({ children }: Props) => (
    <MantineProvider theme={theme}>
        <SessionProvider>{children}</SessionProvider>
    </MantineProvider>
);

export default Providers;
