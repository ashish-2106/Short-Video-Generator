import Image from 'next/image'
import React from 'react'


const options = [
    {
        name: 'Realistic',
        image: '/realistic.webp'
    },
    {
        name: 'cinematic',
        image: '/cinematic.webp'
    },
    {
        name: 'Anim',
        image: '/anim.webp'
    },
    {
        name: 'Cartoon',
        image: '/3d.webp'
    },
    {
        name: 'GTA',
        image: '/gta.webp'
    },
    {
        name: 'Cyberpunk',
        image: '/cyberpunk.webp'
    },
    {
        name: 'Watercolor',
        image: '/watercolor.webp'
    }
]
function VideoStyle({ onHandelInputChange }) {
    return (
        <div className='mt-5'>
            <h2>Video Style</h2>
            <p className='text-sm text-gray-400 mb-1'>Select Video Style</p>

            <div className='grid grid-cols-2 lg:grid-col-3 xl:grid-cols-5 gap-2'>
                {options?.map(((options, index) => (
                    <div>
                        <Image src={options.image} alt={options.name}
                            width={500} height={120} className='object-cover h-[70px]
                        lg:h-[90px] xl:h-[180px]'/>

                    </div>
                )

                ))}
            </div>
        </div>
    )
}

export default VideoStyle
