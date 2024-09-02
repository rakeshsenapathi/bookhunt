'use client';

import { Transition } from '@/components/Transition';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

export default function SubmissionPage() {
    const [currentTab, setCurrentTab] = useState<number>(1);

    const navigationContent = [
        {
            index: 1,
            label: 'Basic details',
        },
        {
            index: 2,
            label: 'Editor',
        },
    ];

    const formSchema = z.object({
        username: z.string().min(2, {
            message: 'Username must be at least 2 characters.',
        }),
        tagline: z.string().min(2, {
            message: 'tagline must be at least 2 characters.',
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            tagline: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    const SubmissionNavigation = () => {
        return (
            <nav className="flex flex-col grow-0 w-1/5">
                {navigationContent.map((obj, index) => (
                    <div
                        key={obj.index}
                        className={cn(
                            'p-3 rounded-sm text-sm font-semibold cursor-pointer transition-colors duration-500',
                            currentTab === obj.index ? 'bg-secondary' : ''
                        )}
                        onClick={() => setCurrentTab(obj.index)}
                    >
                        {obj.label}
                    </div>
                ))}
            </nav>
        );
    };

    const HeadingText = ({
        mainText,
        subText,
    }: {
        mainText: string;
        subText: string;
    }) => {
        return (
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{mainText}</h1>
                <h3 className="text-sm text-gray-400">{subText}</h3>
            </div>
        );
    };

    const BasicDetailsContainer = () => {
        return (
            <>
                <HeadingText
                    mainText="Tell us basic details about your book"
                    subText="We will need name, tagline"
                />
                <div className="pt-6">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-3"
                        >
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Name of the read"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tagline"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tagline</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Tagline for the book"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            </>
        );
    };

    const EditorContainer = () => {
        return (
            <div>
                <HeadingText
                    mainText="Main Rich Text Editor"
                    subText="orchestrate your book"
                />
            </div>
        );
    };

    return (
        <Transition className="flex flex-grow min-w-screen px-0 sm:px-8 -translate-y-10">
            <Card className="mx-5 mt-5 w-full shadow-xl">
                <CardHeader className="text-xl font-bold">Submit</CardHeader>
                <Separator />
                <CardContent>
                    <div className="flex flex-row gap-3 py-3">
                        <SubmissionNavigation />
                        <div>
                            <Separator orientation="vertical" />
                        </div>
                        <div className="p-3 w-full">
                            {currentTab === 1 && <BasicDetailsContainer />}
                            {currentTab === 2 && <EditorContainer />}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Transition>
    );
}
