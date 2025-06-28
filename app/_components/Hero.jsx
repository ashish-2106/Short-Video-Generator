import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

function Hero() {
  return (
    <div className=' p-4 mt-35 flex-col justify-center items-center text-center '>
      <h2 className='font-bold text-6xl'>AI Short video generator</h2>
      <p className='mt-4 text-2xl tet-center text-gray-500'>🤖 AI generates scripts, images, and voiceovers in seconds. <br />
      ⚡ Create, edit, and publish engaging shorts with ease!</p>

      <div className='mt-8 flex gap-4 justify-center'>
        <Button className='' variant="outline" >Explore</Button>
        <Authentication>
        <Button className='bg-white text-black '>Get Started</Button>
        </Authentication>
        
      </div>
       {/* Social Media Icons */}
      <div className='mt-70 flex justify-center gap-6 text-gray-600'>
        <a href='https://github.com/ashish-2106' target='_blank' rel='noopener noreferrer'>
          <Github className='hover:text-black' />
        </a>
        <a href='https://linkedin.com/in/ashish2016' target='_blank' rel='noopener noreferrer'>
          <Linkedin className='hover:text-blue-700' />
        </a>
        <a href='https://twitter.com/AshishJ02790846?s=09' target='_blank' rel='noopener noreferrer'>
          <Twitter className='hover:text-blue-500' />
        </a>
        <a href='https://www.instagram.com/ashish_jhajharia__?igsh=MTM0cmFtb3hic3ZzZw==' target='_blank' rel='noopener noreferrer'>
          <Instagram className='hover:text-pink-600' />
        </a>
      </div>
    </div>
  )
}

export default Hero
