'use client';

import { Transition } from '@/components/Transition';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Profile({
    params,
}: {
    params: { profileName: string };
}) {
    return (
        <Transition className="flex flex-grow min-w-screen px-0 sm:px-5 -translate-y-10">
            <Card className="mx-5 mt-5 w-full shadow-xl">
                <CardHeader>
                    <CardTitle className="leading-tight tracking-tighter">
                        Profile Information
                    </CardTitle>
                    <CardDescription className="text-sm font-medium">
                        Fill out details about profile, add socials links for
                        more visibility
                    </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>
                    <h1 className="uppercase text-gray-500 text-sm -leading-3 font-bold">
                        Profile Picture
                    </h1>
                </CardContent>
                <CardContent>
                    <h1 className="uppercase text-gray-500 text-sm -leading-3 font-bold">
                        Full Name
                    </h1>
                </CardContent>
            </Card>
        </Transition>
    );
}
