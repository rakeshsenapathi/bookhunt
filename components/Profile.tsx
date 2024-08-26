'use client';
import { Avatar, Menu, rem, Text } from '@mantine/core';
import { IconSettings, IconLogout, IconUserCircle } from '@tabler/icons-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

interface ProfileProps {
    session: Session;
}

export const Profile: React.FC<ProfileProps> = ({ session }) => {
    return (
        <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
                <Avatar src={session.user?.image}></Avatar>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                    leftSection={
                        <IconUserCircle
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                >
                    My Profile
                </Menu.Item>
                <Menu.Item
                    leftSection={
                        <IconSettings
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                >
                    Settings
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    onClick={() => signOut({ redirect: true })}
                    color="red"
                    leftSection={
                        <IconLogout
                            style={{ width: rem(14), height: rem(14) }}
                        />
                    }
                >
                    Sign Out
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};
