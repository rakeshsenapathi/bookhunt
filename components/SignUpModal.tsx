'use client';

import { Socials } from '@/types';
import { Button, Group, Stack, Text } from '@mantine/core';
import { IconBrandGoogleFilled, IconMail } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';

interface SignUpModalProps {}

export const SignUpModal: React.FC<SignUpModalProps> = () => {
    const handleSocialSignIn = (type: Socials) => {
        switch (type) {
            case 'google':
                signIn('google');
                break;
            case 'email':
                break;
            default:
                return;
        }
    };
    return (
        <Stack align="stretch">
            <Text size="lg" fw={700}>
                Sign up for Book Hunt
            </Text>
            <Text size="sm">
                Join our community of passionate writers who want to collaborate
                and discover great writing
            </Text>
            <Button
                variant="outline"
                onClick={() => handleSocialSignIn('google')}
            >
                <Group>
                    <IconBrandGoogleFilled />
                    Login with Google
                </Group>
            </Button>
            <Text>----- OR -----</Text>
            <Button
                variant="outline"
                color="green"
                onClick={() => handleSocialSignIn('email')}
            >
                <Group>
                    <IconMail />
                    Login with email
                </Group>
            </Button>
        </Stack>
    );
};
