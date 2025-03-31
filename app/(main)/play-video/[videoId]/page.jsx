"use client"
import React, { useEffect, useState } from 'react'
import Remotionplayer from '../_components/Remotionplayer'
import VideoInfo from '../_components/VideoInfo'
import { useParams } from 'next/navigation';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';

function playVideo() {
    const { videoID } = useParams();
    const convex = useConvex();
    const [videoData,setVideoData] = useState();
    
    useEffect(()=>{
        videoID && GetVideoDataByID();
    },[videoID])

    const GetVideoDataByID = async () => {
        const result = await convex.query(api.convex.GetVideoDataByID, {
            videoID : videoID
        })
        console.log(result);
        setVideoData(result);
        
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                {/* remotion player */}
                <Remotionplayer videoData ={videoData}/>

            </div>
            <div>
                {/* Video Information */}
                <VideoInfo />

            </div>
        </div>
    )
}

export default playVideo

