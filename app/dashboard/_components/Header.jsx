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
        <div className='flex p-4 items-center justify-between bg-secondary shadow-m'>
            {/* Logo */}
            <Image src={'/logo.svg'} width={160} height={100} alt='logo' />

            {/* Empty space in place of removed navigation items */}
            <div className="flex-1"></div>

            {/* Right-side content: Navigation Links and User Profile */}
            <ul className='flex gap-6 items-center'>
               

                {/* How it Works Link */}
                <li
                    onClick={() => getRoutLink('/dashboard/how')}
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer  ${path === '/dashboard/how' ? 'text-primary font-bold' : ''}`}>
                    How it Works
                </li>

               

                {/* User Profile (Clerk's UserButton) */}
                <UserButton />
            </ul>
        </div>
    );
}

export default Header;
