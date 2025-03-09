"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Authentication from './Authentication';
import { useAuthContext } from '../provider';
import Link from 'next/link';

function Header() {
    const { user } = useAuthContext();
    return (
        <div className="p-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Image src={'/logo.svg'} alt="logo" width={40} height={40} />
                <h1 className="text-2xl font-bold">Video Gen</h1>
            </div>
            <div>
                {!user ? <Authentication>
                    <Button className="bg-white text-black">
                        Get Started
                    </Button>
                </Authentication>
                    : <div className='flex items-center gap-3'>
                        <Link href={'/dashboard'}>
                            <Button className="bg-white text-black">Dashboard</Button>
                        </Link>
                        {user?.photoURL && <Image src={user?.photoURL} alt="user" width={40} height={40} className="rounded-full" />}
                    </div>}
            </div>
        </div>
    );
}

export default Header;
