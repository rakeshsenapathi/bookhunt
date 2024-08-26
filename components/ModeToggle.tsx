'use client';

import {
    ActionIcon,
    useComputedColorScheme,
    useMantineColorScheme,
} from '@mantine/core';
import cx from 'clsx';
import classes from '../app/page.module.css';
import { IconMoon, IconSun } from '@tabler/icons-react';

interface ModeToggleProps {}

export const ModeToggle: React.FC<ModeToggleProps> = () => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', {
        getInitialValueInEffect: true,
    });

    return (
        //  Toggle dark/light mode */
        <ActionIcon
            onClick={() =>
                setColorScheme(
                    computedColorScheme === 'light' ? 'dark' : 'light'
                )
            }
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
        >
            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
    );
};
