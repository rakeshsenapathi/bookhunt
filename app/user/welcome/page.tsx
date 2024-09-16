import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { redirect } from 'next/navigation';
import { OnboardingForm } from '@/components/forms/onboardingForm';
import { Transition } from '@/components/Transition';
import { cn } from '@/lib/utils';

export default async function Welcome() {
    const session = await getServerSession(authOptions);

    if (session?.user?.onboardingCompleted) {
        return redirect('/');
    }

    return (
        <Transition
            className={cn('flex flex-grow min-w-screen px-0 sm:px-28 sm:py-6')}
        >
            <Card className="w-full shadow-xl grid grid-rows-2">
                <div className="p-3 row-span-8">
                    <CardHeader>
                        <CardTitle>
                            <span className="text-primary pr-3">1/5</span>Let us
                            get to know you
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <OnboardingForm />
                    </CardContent>
                </div>
                <div className="bg-slate-100 rowx-span-4"></div>
            </Card>
        </Transition>
    );
}
