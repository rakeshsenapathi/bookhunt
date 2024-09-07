import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { CardLayout } from '@/components/layouts/CardLayout';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { redirect } from 'next/navigation';
import { OnboardingForm } from '@/components/forms/onboardingForm';

export default async function Welcome() {
    const session = await getServerSession(authOptions);

    if (session?.user?.onboardingCompleted) {
        return redirect('/');
    }

    return (
        <CardLayout className="text-center">
            <CardHeader>
                <CardTitle>Welcome to Book Hunt</CardTitle>
            </CardHeader>
            <CardContent>
                <OnboardingForm />
            </CardContent>
        </CardLayout>
    );
}
