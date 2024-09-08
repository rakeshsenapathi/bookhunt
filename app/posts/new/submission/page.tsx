'use client';

import { CardContent, CardHeader } from '@/components/ui/card';
import {
    Form,
    FormControl,
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
import { CardLayout } from '@/components/layouts/CardLayout';
import Editor from '@/components/Editor';

export default function SubmissionPage() {
    const [currentTab, setCurrentTab] = useState<number>(1);

    const navigationContent = [
        {
            index: 1,
            label: 'Basic Details',
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
            <nav className="flex-col grow-0 w-1/5 hidden sm:visible sm:flex cursor-pointer">
                {navigationContent.map((obj, index) => (
                    <div
                        key={obj.index}
                        className={cn(
                            'inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 justify-start',
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
                <Editor />
            </div>
        );
    };

    return (
        <CardLayout>
            <CardHeader className="text-2xl font-bold tracking-tight">
                Submit
            </CardHeader>
            <Separator />
            <CardContent>
                <div className="flex flex-row gap-3 py-3">
                    <SubmissionNavigation />
                    <div className="hidden sm:visible sm:flex">
                        <Separator orientation="vertical" />
                    </div>
                    <div className="p-0 sm:p-3 w-full">
                        {currentTab === 1 && <BasicDetailsContainer />}
                        {currentTab === 2 && <EditorContainer />}
                    </div>
                </div>
            </CardContent>
        </CardLayout>
    );
}
