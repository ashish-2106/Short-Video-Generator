"use client"
import { useAuthContext } from '@/app/provider';
import { Button } from '@/components/ui/button';
import { CircleDollarSign } from 'lucide-react';
import React from 'react'
export const creditPlans = [
  {
    credits: 10,
    cost: 1
  },
  {
    credits: 50,
    cost: 5
  },
  {
    credits: 100,
    cost: 9
  },
  {
    credits: 200,
    cost: 15
  },
  {
    credits: 500,
    cost: 30
  },
]
function Billing() {
  const { user } = useAuthContext();
  return (
    <div>
      <h2 className='font-bold text-3xl' >Credits</h2>

      <div>
        <div className='p-4 border rounded-xl flex justify-between mt-7 max-w-2xl'>
          <div>
            <h2 className='font-bold text-xl'>Total Credits Left</h2>
            <h2 className='text-sm'>1 Credits = 1 Video</h2>
          </div>
          <h2 className='font-bold text-3xl'>{user?.credits}</h2>
        </div>
        <p className='text-sm p-5 text-gray-500 max-w-2xl '>Where yor credit balance reaches $0, your Video generation will stop working. Add Credits balance
           topped up</p>
        <div className='mt-5'>
          <h2 className='font-bold text-2xl'>Buy More Credits</h2>
          <div>
            {creditPlans.map((plan, index) => (
              <div key={index} className='p-4 border rounded-xl flex justify-between max-w-2xl mt-3'>
                <h2 className='text-xl flex gap-2 items-center'>
                  <CircleDollarSign /> <strong>{plan?.credits}</strong>Credits</h2>
                  <div className='flex gap-2 items-center'>
                    <h2 className='font-medium text-xl'>{plan?.cost}$</h2>
                    <Button>Buy Now</Button>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Billing
