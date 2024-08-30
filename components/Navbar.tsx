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
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { User, CreditCard, Settings, LogOut } from 'lucide-react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/posts/new');
    };

    return (
        <div className="flex flex-row justify-between items-center px-8 py-3 border-b-[1px] border-b-slate-300">
            <Logo />
            <ul className="flex gap-4 cursor-pointer">
                <li>Launches</li>
                <li>News</li>
            </ul>
            <div className="flex justify-center items-center gap-7">
                {session && (
                    <Button onClick={handleSubmit} variant={'outline'}>
                        Submit
                    </Button>
                )}
                {!session && status === 'loading' && (
                    <Skeleton className="w-10 h-10 rounded-full" />
                )}
                {!session && status === 'unauthenticated' && <SignUpModal />}
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
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
                                    <span>Profile</span>
                                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
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
    );
};
