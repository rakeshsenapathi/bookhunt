'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { useSession, getSession } from 'next-auth/react';
import Image from 'next/image';
import { FcUpload } from 'react-icons/fc';
import { Upload } from 'lucide-react';
import { Card } from '../ui/card';

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
        <div className="w-fit">
            <Card className="flex flex-row justify-start gap-4 p-4">
                {' '}
                <Image
                    src={session?.user.image ?? ''}
                    alt="user image"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <div className="flex flex-col justify-between">
                    <h2>Profile Image</h2>
                    <div className="flex flex-row gap-2">
                        <Button className="flex flex-row justify-center items-center gap-2 dark:text-white">
                            <Upload width={20} height={20} />
                            Upload Image
                        </Button>
                        <Button variant={'outline'}>Remove</Button>
                    </div>
                    <h3 className="text-sm font-thin">
                        *.png, *jpeg files upto 10MB atleast 400px by 400px
                    </h3>
                </div>
            </Card>
            <div className="py-3">
                <Form {...form}>
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold">User Name</h1>
                            <Input
                                type="text"
                                placeholder="User Name"
                                {...control.register('username')}
                            />
                            <h1 className="font-bold">About you</h1>
                            <Input
                                type="text"
                                placeholder="About you"
                                {...control.register('aboutyou')}
                            />
                            <Button type="submit" className="">
                                Continue
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};
