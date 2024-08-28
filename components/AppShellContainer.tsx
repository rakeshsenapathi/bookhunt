'use client';

import {
    AppShell,
    Group,
    Burger,
    Button,
    Loader,
    Text,
    Modal,
    Title,
} from '@mantine/core';
import { ModeToggle } from './ModeToggle';
import { Profile } from './Profile';
import { useSession } from 'next-auth/react';
import { useDisclosure } from '@mantine/hooks';
import { SignUpModal } from './SignUpModal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

interface AppShellContainerProps {
    children: any;
}

export const AppShellContainer: React.FC<AppShellContainerProps> = ({
    children,
}) => {
    const [opened, { toggle, open, close }] = useDisclosure();
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/posts/new');
    };

    return (
        <>
            <Modal
                radius={'lg'}
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                centered
            >
                <SignUpModal />
            </Modal>
            <AppShell
                header={{ height: '4rem' }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { desktop: true, mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md" justify="space-between" w="100%">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        ></Burger>
                        <Image
                            onClick={() => router.push('/')}
                            src="/logo.svg"
                            width={40}
                            height={40}
                            alt="logo"
                            style={{
                                cursor: 'pointer',
                            }}
                        />
                        <Group visibleFrom="md">
                            <Text>Launches</Text>
                            <Text>News</Text>
                        </Group>
                        <Group>
                            <ModeToggle />
                            {/* Sign up or Login flow */}
                            {session && (
                                <Button
                                    variant="gradient"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            )}
                            {!session && status === 'loading' && <Loader />}
                            {!session && status === 'unauthenticated' && (
                                <Button
                                    onClick={() => setModalOpened(true)}
                                    size="md"
                                >
                                    Sign in
                                </Button>
                            )}
                            {session && <Profile session={session} />}
                        </Group>
                    </Group>
                </AppShell.Header>
                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </>
    );
};
