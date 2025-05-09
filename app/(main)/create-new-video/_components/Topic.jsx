"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import axios from "axios";
import { useAuthContext } from "@/app/provider";
import { toast, Toaster } from "react-hot-toast"; // ✅ Updated import

const suggestions = [
  "Historic Story",
  "Kids Story",
  "Movie Stories",
  "AI Innovations",
  "Space Mysteries",
  "Horror Stories",
  "Mythological Tales",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Adventures",
  "Science Experiments",
  "Motivational Stories",
];

function Topic({ onHandelInputChange }) {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedScriptIndex, setSelectedScriptIndex] = useState()
  const [scripts, setScripts] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  const GenerateScript = async () => {
    console.log("Checking credits:", user?.credits); // ✅ Debugging log
    
    if (!user) {
      toast.error("User not found. Please log in."); // ✅ Handle missing user
      return;
    }

    if (user.credits <= 0) {
      toast.error("Insufficient credits! Please top up");
      return;
    }
    setLoading(true);
    setSelectedScriptIndex(null);
    try {
      const result = await axios.post('/api/generate-script', {
        topic: selectedTopic
      });
      console.log(result.data);
      setScripts(result.data?.scripts);
    }
    catch (e) {
      console.log(e);
    }
    setLoading(false);
  };


  return (
    <div>
      <h2 className="mb-2">Project Title</h2>
      <Input
        id="projectTitle"  // ✅ Added id
        name="projectTitle"  // ✅ Added name
        placeholder="Enter Project title"
        onChange={(event) => onHandelInputChange("title", event.target.value)} // ✅ Fixed syntax
      />

      <div className="mt-5">
        <h2>Video Topic</h2>
        <p className="text-sm text-gray-600">Select Topic for your video</p>
        <Tabs defaultValue="suggestion" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestion">
            <div>
              {suggestions.map((suggestion, index) => (
                <Button
                  variant="outline"
                  key={index}
                  className={`m-1 ${suggestion == selectedTopic && 'bg-secondary'}`}
                  onClick={() => {
                    setSelectedTopic(suggestion);
                    onHandelInputChange("topic", suggestion);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <div>
              <h2>Enter Your Own Topic</h2>
              <Textarea
                placeholder="Enter your Topic"
                onChange={(event) => onHandelInputChange("topic", event.target.value)} // ✅ Moved inside <Textarea>
              />
            </div>
          </TabsContent>
        </Tabs>
        {scripts?.length > 0 && <div className="grid grid-cols-2 gap-5">
          {scripts?.map((item, index) => (
            <div key={index} className={`p-3 border rounded-lg mt-3 cursor-pointer 
            ${selectedScriptIndex == index && 'border-white bg-secondary'}`}
              onClick={() => {
                setSelectedScriptIndex(index);
                onHandelInputChange('script', item?.content);
              }}
            >
              <h2 className=" text-gray-300">{item.content}</h2>

            </div>
          ))}
        </div>}

      </div>
      {!scripts && <Button className="mt-3" size="sm" disabled={loading} onClick={GenerateScript}>
        {loading ? <Loader2Icon className="animate-spin" /> : <SparklesIcon className="mr-2" />}Generate Script
      </Button>}
    </div>
  );
}

export default Topic;
