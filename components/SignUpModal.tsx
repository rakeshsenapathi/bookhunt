'use client';

import { Socials } from '@/types';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import {
    IconBrandAppleFilled,
    IconBrandFacebookFilled,
    IconBrandGoogleFilled,
    IconBrandLinkedin,
    IconBrandTwitterFilled,
} from '@tabler/icons-react';
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
        <Stack align="stretch" p={'md'} ta={'center'}>
            <Text size="lg" fw={700}>
                Sign up for Book Hunt
            </Text>
            <Text size="md">
                Join our community of passionate writers who want to collaborate
                and discover great writing
            </Text>
            <Stack>
                <Button
                    variant="filled"
                    onClick={() => handleSocialSignIn('google')}
                >
                    <Group>
                        <IconBrandGoogleFilled />
                        Sign in with Google
                    </Group>
                </Button>
                <Group justify="space-between">
                    <IconBrandTwitterFilled />
                    <IconBrandFacebookFilled />
                    <IconBrandAppleFilled />
                    <IconBrandLinkedin />
                </Group>
            </Stack>

            <Text size="xs">
                we'll never post to any of your accounts without your permission
            </Text>
        </Stack>
    );
};
