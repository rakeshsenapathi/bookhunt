'use client';

export default function Profile({
    params,
}: {
    params: { profileName: string };
}) {
    console.log('params', params);
    return (
        <div>
            Test
            <h1>{params && params?.profileName}</h1>
        </div>
    );
}
