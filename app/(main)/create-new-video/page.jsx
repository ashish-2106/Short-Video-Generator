"use client";
import React, { useState } from "react"; // ✅ Added useState import
import Topic from "./_components/Topic";
import VideoStyle from "./_components/VideoStyle";
import Voice from "./_components/Voice";

function CreateNewVideo() {
  const [FormData, setFormData] = useState({}); // ✅ Initialized with an empty object

  const onHandelInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(FormData);
  };

  return (
    <div>
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="col-span-2 p-7 border rounded-xl h-[72vh] overflow-auto">
          {/* Topic & Script */}
          <Topic onHandelInputChange={onHandelInputChange} />
          {/* Video Image style */}
          <VideoStyle onHandelInputChange={onHandelInputChange} />
          {/* Voice */}
          <Voice onHandelInputChange={onHandelInputChange} />
          {/* Captions */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
