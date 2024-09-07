'use client';

import { signOut, useSession } from 'next-auth/react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { SignUpModal } from './SignUpModal';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Skeleton } from './ui/skeleton';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { User, Settings, LogOut, Menu } from 'lucide-react';
import { Separator } from './ui/separator';
import { useEffect } from 'react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/posts/new');
    };

    return (
        <div className="flex flex-col gap-0">
            <div className="flex flex-row justify-between items-center px-5 sm:px-4 py-3">
                <div className="flex justify-center items-center gap-3">
                    <Menu className="sm:hidden" />
                    <Logo />
                </div>

                <ul className="md:flex gap-4 cursor-pointer hidden">
                    <li>Launches</li>
                    <li>News</li>
                </ul>
                <div className="flex justify-center items-center gap-7">
                    {session && (
                        <Button onClick={handleSubmit} variant={'default'}>
                            Submit
                        </Button>
                    )}
                    {!session && status === 'loading' && (
                        <Skeleton className="w-10 h-10 rounded-full" />
                    )}
                    {!session && status === 'unauthenticated' && (
                        <SignUpModal />
                    )}
                    {session && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar>
                                    <AvatarImage
                                        src={session?.user?.image!}
                                        alt="user"
                                    />
                                    <AvatarFallback>User</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 -translate-x-6">
                                <DropdownMenuLabel className="text-sm font-medium">
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            router.push(
                                                `/user/${session.user?.name}`
                                            )
                                        }
                                    >
                                        <User className="mr-2 h-4 w-4" />
                                        <span className="text-sm font-medium">
                                            Profile
                                        </span>
                                        {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => router.push('/settings')}
                                    >
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span className="font-medium text-sm">
                                            Settings
                                        </span>
                                        {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => signOut()}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                    {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </div>
            <Separator />
        </div>
    );
};
