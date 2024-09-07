'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import { Socials } from '@/types';

interface SignUpModalProps {}

export const SignUpModal: React.FC<SignUpModalProps> = () => {
    const session = useSession();
    console.log('signup modal session', session);
    const handleSocialSignIn = async (type: Socials) => {
        switch (type) {
            case 'google':
                signIn('google', {
                    callbackUrl: '/user/redirect',
                });
                break;
            case 'email':
                break;
            default:
                return;
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Sign Up</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold">
                        Sign Up for Book Hunt
                    </h1>
                    <h3 className="text-center">
                        Join our community of passionate writers who want to
                        collaborate and discover great writing
                    </h3>
                    <div className="pt-5 w-[300px] flex flex-col">
                        <Button
                            variant={'outline'}
                            onClick={() => handleSocialSignIn('google')}
                        >
                            <FcGoogle size={20} />
                            <h1 className="ml-3">Login with Google</h1>
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
