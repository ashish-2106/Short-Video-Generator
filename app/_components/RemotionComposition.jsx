import React, { useEffect } from 'react'
import { Audio, Img, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { AbsoluteFill } from 'remotion';

function RemotionComposition({ videoData, setDurationInFrames }) {
  const captions = videoData?.captionJson;
  const imageList = videoData?.images;
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  useEffect(() => {
    videoData && getDurationFrame();
  }, [videoData])
  const getDurationFrame = () => {
    const totalDuration = captions[captions?.length - 1]?.end * fps;
    setDurationInFrames(totalDuration)
    return totalDuration;
  }
  const getCurrentCaption = () => {
    const currentTime = frame / 30;
    const currentCaption = captions?.find((item) => currentTime >= item?.start && currentTime <= item?.end)
    return currentCaption ? currentCaption?.word : '';
  }
 

  const getCaptionStyle = () => {
    const capStyle =videoData?.caption?.style;
    console.log("Caption Style:", capStyle); // This will correctly log before returning
    return capStyle || "text-white text-4xl font-bold";
};


  return (
    <div>


      <AbsoluteFill>

        {imageList?.map((item, index) => {
          const startTime = (index * getDurationFrame()) / imageList.length;
          const duration = getDurationFrame();
          const scale = (index) => interpolate(
            frame,
            [startTime, startTime + duration / 2, startTime + duration],
            index % 2 == 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          )

          return (
            <Sequence key={index} from={startTime} durationInFrames={getDurationFrame()}>
              <AbsoluteFill>
                <Img src={item}
                  style={{

                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale(index)})`,
                  }} />
              </AbsoluteFill>
            </Sequence>
          );
        })}

      </AbsoluteFill>
      <AbsoluteFill>
        <div
          className={getCaptionStyle()} // Apply the chosen caption style
          style={{
            position: "absolute",
            bottom: "50px", // Push caption 50px from the bottom
            left: "50%", // Start at the middle
            transform: "translateX(-50%)", // Adjust to center properly
            textAlign: "center",
            width: "max-content", // Prevent extra width issues
            padding: "10px", // Optional padding

          }}
        >
          <h2 style={{
            fontSize: "50px",  // Increase font size
            fontWeight: "bold", // Make text bold
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)", // Optional shadow for better visibility
          }} className={getCaptionStyle()} >{getCurrentCaption()}</h2>
        </div>
      </AbsoluteFill>

      {videoData?.audioUrl && <Audio src={videoData?.audioUrl} />}

    </div>
  )
}

export default RemotionComposition
