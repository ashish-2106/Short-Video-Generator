"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function VideoList() {
    const [videoList, setVideoList] = useState([]);
    return (
        <div>
            {videoList.length == 0 &&
                <div className='flex flex-col items-center justify-center mt-28 gap-5 p-5 border border-dashed rounded-xl py-16'>
                    <Image src={'/logo.svg'} alt='logo' width={60} height={60} />
                    <h2 className='text-gray-400 text-lg'>You don't have any video created.Create new one</h2>
                    <Link href={'/create-new-video'}>
                        <Button className='cursor-pointer'>+ Create New Video</Button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default VideoList
