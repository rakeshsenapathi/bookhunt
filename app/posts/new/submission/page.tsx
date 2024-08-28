'use client';

import { Tabs, Title, Text, Fieldset, TextInput, Button } from '@mantine/core';

export default function SubmissionPage() {
    return (
        <div>
            <Tabs
                defaultValue="gallery"
                orientation="vertical"
                w={'100%'}
                h={'40rem'}
                px={'10rem'}
            >
                <Tabs.List>
                    <Tabs.Tab value="basicdetails">Basic Details</Tabs.Tab>
                    <Tabs.Tab value="media">Images and Media</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="basicdetails" px={'lg'}>
                    <Title order={1}>Fill in your basic details</Title>
                    <Fieldset legend="Personal information" w={'30rem'}>
                        <TextInput label="Your name" placeholder="Your name" />
                        <TextInput label="Email" placeholder="Email" mt="md" />
                        <Button
                            variant="filled"
                            ta="center"
                            m={'1rem'}
                            mx={'auto'}
                        >
                            Submit
                        </Button>
                    </Fieldset>
                </Tabs.Panel>
                <Tabs.Panel value="media">Messages tab content</Tabs.Panel>
            </Tabs>
        </div>
    );
}
