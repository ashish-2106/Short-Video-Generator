import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useState } from 'react';

const voiceOptions = [
  {
    "value": "af_sarah",
    "name": "Sarah (Female)"
  },
  {
    "value": "af_sky",
    "name": "Sky (Female)"
  },
  {
    "value": "am_adam",
    "name": "Adam (Male)"
  },
  {
    "value": "hf_alpha",
    "name": "Alpha (Female)"
  },
  {
    "value": "hf_beta",
    "name": "Beta (Female)"
  },
  {
    "value": "hm_omega",
    "name": "Omega (Male)"
  },
  {
    "value": "hm_psi",
    "name": "Psi (Male)"
  },
  {
    "value": "am_echo",
    "name": "Echo (Male)"
  },
  {
    "value": "am_eric",
    "name": "Eric (Male)"
  },
  {
    "value": "am_fenrir",
    "name": "Fenerir (Male)"
  },
  {
    "value": "am_liam",
    "name": "Liam (Male)"
  },
  {
    "value": "am_micheal",
    "name": "micheal (Male)"
  },
  {
    "value": "am_onyx",
    "name": "Onyx (Male)"
  },
];

function Voice({ onHandelInputChange }) {
  const [selectedVoice, setSelectedVoice] = useState(null);
  return (
    <div className='mt-5'>
      <h2>Video Voice</h2>
      <p className='text-sm text-gray-400'>Select voice for the video</p>
      <ScrollArea className="h-[200px] w-[full] p-4">
      <div className="grid grid-cols-2 gap-3 mt-2">
        {voiceOptions.map((voice, index) => (
          <div
            key={index}
            className={`cursor-pointer p-3 dark:bg-slate-900 dark:border-white rounded-lg transition-all duration-200
              ${selectedVoice === voice.name ? 'ring-2 ring-white-500' : 'hover:ring-1 hover:ring-white-300'}
            `}
            onClick={() =>{ setSelectedVoice(voice.name);
                onHandelInputChange('voice',voice.value)
            }}
          >
            {voice.name}
          </div>
        ))}
      </div>
      </ScrollArea>
    </div>
  );
}

export default Voice;