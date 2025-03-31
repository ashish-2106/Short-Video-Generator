"use client"
import React from 'react'
import { Player } from '@remotion/player';
import RemotionComposition from '@/app/_components/RemotionComposition';

function Remotionplayer({ videoData }) {
    return (
        <div>
            <Player
                component={RemotionComposition}
                durationInFrames={120}
                compositionWidth={720}
                compositionHeight={1280}
                fps={30}

                controls={true}
                style={{
                    width: '25vh',
                    height: '72vh',

                }}

                inputProps={{
                    videoData: videoData
                }}

            />


        </div>
    )
}

export default Remotionplayer
