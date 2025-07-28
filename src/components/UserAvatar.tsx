"use client";

import Image from "next/image";

export default function UserAvatar() {
    return (
        <div className="flex flex-col">
            <div className="relative w-fit z-10 float-x-rotate-x">
                <div className="white-border-glow"></div>

                <div className="w-fit flex items-center px-3 py-2 border border-[#b1b1b1] rounded-full relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                            src="/images/man.jpg"
                            alt="User 1"
                            fill
                            sizes="48px"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden -ml-3 relative">
                        <Image
                            src="/images/female.jpg"
                            alt="User 2"
                            fill
                            sizes="48px"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden -ml-3 relative">
                        <Image
                            src="/images/female3.jpg"
                            alt="User 3"
                            fill
                            sizes="48px"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#C9F31D] flex items-center justify-center text-black font-bold text-[16px] -ml-3">
                        20+
                    </div>
                </div>
            </div>

            <p className="mt-1.5 mx-auto text-[#E6F620] relative z-[50]">Excellent Reviews</p>
        </div>
    );
}
