"use client"
import React, { useEffect, useState } from 'react'
import Remotionplayer from '../_components/Remotionplayer'
import VideoInfo from '../_components/VideoInfo'
import { useParams } from 'next/navigation';
import { useConvex, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

function playVideo() {
    const { videoId } = useParams();
    const convex = useConvex();
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        videoId && GetVideoDataByID(); 
    }, [videoId]);

    const GetVideoDataByID = async () => {
        const result = await convex.query(api.videoData.GetVideoById, {
            videoId: videoId,
        });
        console.log("Fetched Video Data:", result);
        setVideoData(result);
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
                {/* remotion player */}
                <Remotionplayer videoData ={videoData}/>

            </div>
            <div>
                {/* Video Information */}
                <VideoInfo videoData ={videoData}/>

            </div>
        </div>
    )
}

export default playVideo

