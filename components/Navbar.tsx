'use client';

import { useSession } from 'next-auth/react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { SignUpModal2 } from './SignUpModal2';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/posts/new');
    };

    return (
        <div className="flex flex-row justify-between items-center px-12 py-3 border-b-[1px] border-b-slate-300">
            <Logo />
            {session && <Button onClick={handleSubmit}>Submit</Button>}
            {!session && status === 'loading' && <div>loading..</div>}
            {/* {!session && status === 'unauthenticated' && (
                <Button onClick={() => setModalOpened(true)} size="md">
                    Sign in
                </Button>
            )}
            {session && <Profile session={session} />} */}
            <SignUpModal2 />
            <Button variant={'default'}>Sign In</Button>
        </div>
    );
};
