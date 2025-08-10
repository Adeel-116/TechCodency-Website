"use client";

import Image from "next/image";

export default function UserAvatar() {
    return (
        <div className="flex flex-col">
            <div className="relative w-fit z-10 float-x-rotate-x">
                <div className="white-border-glow"></div>

                <div className="w-fit flex items-center sm:px-3 sm:py-2 px-2 py-1 border border-text-secondary rounded-full relative z-10">
                    <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-full overflow-hidden relative">
                        <Image
                            src="/images/man.jpg"
                            alt="User 1"
                            fill
                            sizes="48px"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-full overflow-hidden -ml-3 relative">
                        <Image
                            src="/images/female.jpg"
                            alt="User 2"
                            fill
                            sizes="48px"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-full overflow-hidden -ml-3 relative">
                        <Image
                            src="/images/female3.jpg"
                            alt="User 3"
                            fill
                            sizes="48px"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-text-black font-bold sm:text-[16px] text-[10px] sm:-ml-2.5 -ml-1.5 ">
                        20+
                    </div>
                </div>
            </div>
        </div>
    );
}
