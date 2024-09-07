'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { useSession, getSession } from 'next-auth/react';

export const OnboardingForm = () => {
    const form = useForm();
    const { data: session, update } = useSession();
    const { handleSubmit, control } = form;
    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch('/api/onboarding', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const json = await res.json();
    });

    return (
        <Form {...form}>
            <form onSubmit={onSubmit}>
                <Input
                    type="text"
                    placeholder="User Name"
                    {...control.register('username')}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
