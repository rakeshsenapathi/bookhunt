'use client';

export default function Profile({
    params,
}: {
    params: { profileName: string };
}) {
    console.log('params', params);
    return (
        <div>
            <h1 className="text-xl text-violet-700">Test</h1>
            <h1 className="text-xl">{params && params?.profileName}</h1>
        </div>
    );
}
