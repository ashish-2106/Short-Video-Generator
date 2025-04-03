"use client"
import React, { useState } from 'react'
import { Player } from '@remotion/player';
import RemotionComposition from '@/app/_components/RemotionComposition';

function Remotionplayer({ videoData }) {
    const [durationInFrames, setDurationInFrames] = useState(100);
    return (
        <div>
            <Player
                component={RemotionComposition}
                durationInFrames={Number(durationInFrames.toFixed(0)) + 100}
                compositionWidth={720}
                compositionHeight={1280}
                fps={30}

                controls
                style={{
                    width: '25vw',
                    height: '72vh',

                }}

                inputProps={{
                    videoData: videoData,
                    setDurationInFrames: (frameValue) => setDurationInFrames(frameValue),

                }}


            />


        </div>
    )
}

export default Remotionplayer
