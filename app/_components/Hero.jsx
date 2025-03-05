import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

function Hero() {
  return (
    <div className='p-4 mt-35 flex-col justify-center items-center text-center '>
      <h2 className='font-bold text-6xl'>AI Short video generator</h2>
      <p className='mt-4 text-2xl tet-center text-gray-500'>🤖 AI generates scripts, images, and voiceovers in seconds. <br />
      ⚡ Create, edit, and publish engaging shorts with ease!</p>

      <div className='mt-8 flex gap-4 justify-center'>
        <Button className='' variant="outline" >Explore</Button>
        <Authentication>
        <Button className='bg-white text-black '>Get Started</Button>
        </Authentication>
        
      </div>
    </div>
  )
}

export default Hero
