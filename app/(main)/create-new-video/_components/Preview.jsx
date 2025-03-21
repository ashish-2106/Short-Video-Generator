import Image from 'next/image';
import React from 'react'
import { options } from './VideoStyle';

function Preview({ formdata }) {
  const selectVideoStyle = formdata && options.find((item => item?.name == formdata?.videoStyle));
  console.log(selectVideoStyle);
  return formdata?.videoStyle && (
    <div className='relative'>
      <h2 className='text-xl mb-1'>Preview</h2>
      <Image src={selectVideoStyle?.image} alt={selectVideoStyle?.name}
        width={1000} height={300}
        className='w-full h-[68vh] object-cover rounded-xl' />
      <h2 className={`${formdata?.caption?.style} absolute bottom-4 text-center w-full`}>{formdata?.caption?.name}</h2>
    </div>

  )
}

export default Preview
