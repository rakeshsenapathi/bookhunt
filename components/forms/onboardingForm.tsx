'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Upload } from 'lucide-react';
import { Card } from '../ui/card';
import { useRef, useState } from 'react';

export const OnboardingForm = () => {
    const form = useForm();
    const { data: session, update } = useSession();
    const [image, setImage] = useState<string | null>(
        session?.user.image ?? ''
    );
    const { handleSubmit, control } = form;
    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch('/api/onboarding', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const json = await res.json();
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log(file);
            // Handle upload to S3 here

            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleRemove = () => {
        // Remove the uploaded image
        if (session?.user.image) {
            // Reset the user's image in the session
            update({ image: null });

            // Reset the file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }

            // TODO: If the image is stored in S3 or another storage service,
            // you should also delete it from there. This would typically involve
            // making an API call to your backend, which would then delete the image
            // from the storage service.

            // Example API call (uncomment and adjust as needed):
            // await fetch('/api/remove-profile-image', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ userId: session.user.id }),
            // });
        }
    };

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
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <Button
                            className="flex flex-row justify-center items-center gap-2 dark:text-white"
                            onClick={handleUpload}
                        >
                            <Upload width={20} height={20} />
                            Upload Image
                        </Button>
                        <Button variant={'outline'} onClick={handleRemove}>
                            Remove
                        </Button>
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
