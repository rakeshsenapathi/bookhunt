'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
    const router = useRouter();

    return (
        <Image
            src={'/logo.svg'}
            alt="logo"
            width={160}
            height={160}
            onClick={() => router.push('/')}
            className="cursor-pointer"
        />
    );
};
