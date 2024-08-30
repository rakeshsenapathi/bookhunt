'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
    const router = useRouter();

    return (
        <Image
            src={'/logo.svg'}
            alt="logo"
            width={40}
            height={40}
            onClick={() => router.push('/')}
        />
    );
};
