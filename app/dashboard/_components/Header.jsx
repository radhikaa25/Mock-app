"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

function Header() {
    const path = usePathname();
    const router = useRouter();

    useEffect(() => {
        console.log(path);
    }, [path]);

    // Function to handle routing
    function getRoutLink(path) {
        console.log("Navigating to:", path);
        router.push(path);
    }

    return (
        <div className='flex p-4 items-center bg-black justify-between shadow-m'>
            {/* Logo */}
            

            {/* Empty space in place of removed navigation items */}
            <div className="flex-1"></div>

            {/* Right-side content: Navigation Links and User Profile */}
            <ul className='flex gap-6 items-center'>
               

                {/* How it Works Link */}
               

               

                {/* User Profile (Clerk's UserButton) */}
                <UserButton />
            </ul>
        </div>
    );
}

export default Header;
