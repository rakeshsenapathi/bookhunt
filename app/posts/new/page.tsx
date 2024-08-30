'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function PostPage() {
    const router = useRouter();
    return (
        <div className="flex grow">
            <div className="grid grid-cols-2">
                <div className="bg-slate-300"></div>
                <div className="p-5 flex flex-col">
                    <div className="text-2xl font-bold">Submit a writing!</div>
                    <div className="text-base text-gray-600">
                        Ready to launch your writing into the world but have
                        some lingering questions? Whether you’re unsure about
                        the submission process, wondering about our publishing
                        timeline, or curious about the best ways to promote your
                        work, we’re here to help. Don’t hesitate to reach out
                        and make sure you’re fully prepared to take the next
                        step!
                    </div>
                    <Button
                        onClick={() => router.push('/posts/new/submission')}
                        className="w-28 mt-4"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    );
}
