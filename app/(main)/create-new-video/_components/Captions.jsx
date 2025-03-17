import React, { useState } from 'react'

const options=[
    {
        "name":"Youtuber",
        "style":"text-yellow-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg"
    },
    {
        "name":"Superme",
        "style":"text-white text-3xl font-bold italic drop-shadow-lg px-3 py-1 rounded-lg"
    },
    {
        "name":"Neon",
        "style":"text-green-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg px-3 py-1 rounded-lg"
    },
    {
        "name":"Glitch",
        "style":"text-pink-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] px-3 py-1 rounded-lg"
    },
    {
        "name":"Fire",
        "style":"text-red-500 text-3xl font-extrabold uppercase px-3 py-1 rounded-lg"
    },
    {
        "name":"Futuristic",
        "style":"text-blue-500 text-3xl font-semibold uppercase tracking-wide px-3 py-1 rounded-lg"
    }
]
function Captions({onHandelInputChange}) {
    const[selectedCaptionStyle,setSelectedCaptionStyle]=useState();
  return (
    <div className='mt-5'> 
      <h2>Caption Style</h2>
      <p className='text-sm text-gray-400'>Select Caption Style</p>

      <div className='flex flex-wrap gap-4 mt-2 '>
        {options.map((option,index) =>(
            <div key={index} 
            onClick={()=>{
                setSelectedCaptionStyle(option.name)
                onHandelInputChange('captions',option)
            }}
            className={`p-2 hover:border bg-slate-900 border-gray-300
             cursor-pointer rounded-lg  ${selectedCaptionStyle == option.name && 'border'}`}>
                <h2 className={option.style}>{option.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Captions
