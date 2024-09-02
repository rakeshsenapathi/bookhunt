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

export default function Profile({
    params,
}: {
    params: { profileName: string };
}) {
    return (
        <div className="flex flex-grow px-5 sm:px-48 pt-16 flex-col gap-2 items-center min-w-full bg-slate-100">
            <Transition className="w-full">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>
                            Fill out details about profile, add socials links
                            for more visibility
                        </CardDescription>
                    </CardHeader>
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
        </div>
    );
}
