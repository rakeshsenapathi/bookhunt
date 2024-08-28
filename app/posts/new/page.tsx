'use client';

import {
    Grid,
    Stack,
    Title,
    Container,
    Button,
    Text,
    Card,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function PostPage() {
    const router = useRouter();
    return (
        <Grid>
            <Grid.Col span={6} visibleFrom="md" h={'88vh'}>
                <Card h={'100%'}></Card>
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack p={'lg'} justify="stretch">
                    <Title order={1}>Submit a writing</Title>
                    <Text>
                        Ready to launch your writing into the world but have
                        some lingering questions? Whether you’re unsure about
                        the submission process, wondering about our publishing
                        timeline, or curious about the best ways to promote your
                        work, we’re here to help. Don’t hesitate to reach out
                        and make sure you’re fully prepared to take the next
                        step!
                    </Text>
                    <Button
                        bg={'red'}
                        w={200}
                        onClick={() => router.push('/posts/new/submission')}
                    >
                        Get Started
                    </Button>
                </Stack>
            </Grid.Col>
        </Grid>
    );
}
