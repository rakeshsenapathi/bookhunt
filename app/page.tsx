'use client';
import { ModeToggle } from '@/components/ModeToggle';
import { SignUpModal } from '@/components/SignUpModal';
import { AppShell, Text, Group, Button, Burger, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export default function Home() {
    const [opened, { toggle, open, close }] = useDisclosure();
    const [signedIn, setSignedIn] = useState<boolean>();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
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
                    <Group hiddenFrom="sm">
                        <Text>Launches</Text>
                        <Text>News</Text>
                    </Group>
                    <Group>
                        <ModeToggle />
                        {/* Sign up or Login flow */}
                        {!signedIn && (
                            <Button onClick={open} size="md">
                                Sign in
                            </Button>
                        )}
                    </Group>
                </Group>
            </AppShell.Header>
        </AppShell>
    );
}
