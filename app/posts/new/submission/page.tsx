'use client';

import { Transition } from '@/components/Transition';

export default function SubmissionPage() {
    return (
        <Transition>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col ">
                    <div>Main Info</div>
                    <div>Images and Media</div>
                    <div>Makers</div>
                </div>
            </div>
        </Transition>
    );
}
