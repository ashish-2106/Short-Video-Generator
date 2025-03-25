"use client";
import React, { useState } from "react"; // ✅ Added useState import
import Topic from "./_components/Topic";
import VideoStyle from "./_components/VideoStyle";
import Voice from "./_components/Voice";
import Captions from "./_components/Captions";
import { Button } from "@/components/ui/button";
import { Loader2Icon, WandSparkles } from "lucide-react";
import Preview from "./_components/Preview";
import axios from "axios";
import { useMutation } from "convex/react";
import { useAuthContext } from "@/app/provider";
import { api } from "@/convex/_generated/api";

function CreateNewVideo() {
  const [formdata, setFormData] = useState({}); // ✅ Initialized with an empty object
  const CreateInitialVideoRecord = useMutation(api.videoData.createVideoData);
  const { user } = useAuthContext();
  const [loading, setloading] = useState(false);
  const onHandelInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(formdata);
  }

  const GenerateVideo = async () => {
    if (!formdata?.topic || !formdata?.script || !formdata?.videoStyle || !formdata?.caption || !formdata?.voice) {
      console.error("Missing fields:", {
        topic: formdata.topic,
        script: formdata.script,
        videoStyle: formdata.videoStyle,
        caption: formdata.caption,
        voice: formdata.voice
      });
      alert("Enter all the fields");
      return;
    }
    setloading(true);

    const resp = await CreateInitialVideoRecord({
      topic: formdata.topic,
      script: formdata.script,
      title: formdata.title,
      caption: formdata.caption,
      videoStyle: formdata.videoStyle,
      voice: formdata.voice,
      uid: user?._id,
      createdBy: user?.email,
      credits:user?.credits
    });
    console.log(resp);

    const result = await axios.post('/api/generate-video-data', {
      ...formdata,
      recordID:resp
     
    })
    console.log(result);

    setloading(false);
  }

  return (
    <div>
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-5">
        <div className="col-span-2 p-7 border rounded-xl h-[72vh] overflow-auto">
          {/* Topic & Script */}
          <Topic onHandelInputChange={onHandelInputChange} />
          {/* Video Image style */}
          <VideoStyle onHandelInputChange={onHandelInputChange} />
          {/* Voice */}
          <Voice onHandelInputChange={onHandelInputChange} />
          {/* Captions */}
          <Captions onHandelInputChange={onHandelInputChange} />
          <Button className="w-full mt-5 cursor-pointer"
          disabled={loading}
            onClick={GenerateVideo}>{loading?<Loader2Icon className="animate-spin"/>:<WandSparkles />} Generate video</Button>
        </div>
        <div>
          <Preview formdata={formdata} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
