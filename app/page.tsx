'use client';
import { Dashboard } from '@/components/Dashboard';
import { ModeToggle } from '@/components/ModeToggle';
import { Profile } from '@/components/Profile';
import { SignUpModal } from '@/components/SignUpModal';
import {
    AppShell,
    Text,
    Group,
    Button,
    Burger,
    Modal,
    Loader,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useSession } from 'next-auth/react';

export default function Home() {
    const [opened, { toggle, open, close }] = useDisclosure();
    const { data: session, status } = useSession();

    return (
        <AppShell header={{ height: 60 }} padding="md">
            <Modal opened={opened} onClose={close} centered>
                <SignUpModal />
            </Modal>
            <AppShell.Header>
                <Group h="100%" px="md" justify="space-between">
                    {/* Title and logo */}
                    <Group>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Text size="lg" fw={700}>
                            Book Hunt
                        </Text>
                    </Group>
                    <Group>
                        <Text>Launches</Text>
                        <Text>News</Text>
                    </Group>
                    <Group>
                        <ModeToggle />
                        {/* Sign up or Login flow */}
                        {!session && status === 'loading' && <Loader />}
                        {!session && status === 'unauthenticated' && (
                            <Button onClick={open} size="md">
                                Sign in
                            </Button>
                        )}
                        {session && <Profile session={session} />}
                    </Group>
                </Group>
            </AppShell.Header>
            <AppShell.Main>
                <Dashboard />
            </AppShell.Main>
        </AppShell>
    );
}
