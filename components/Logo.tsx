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
            width={120}
            height={120}
            onClick={() => router.push('/')}
            className="cursor-pointer"
        />
    );
};
