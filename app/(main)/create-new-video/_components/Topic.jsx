"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SparklesIcon } from "lucide-react";

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
  const [SelectTopic, SetSelectedTopic] = useState("");

  const GenerateScript = () => {
    console.log("Generating script..."); // ✅ Placeholder for now
  };

  return (
    <div>
      <h2 className="mb-2">Project Title</h2>
      <Input
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
                  className={`m-1 ${suggestion === SelectTopic ? "bg-secondary" : ""}`}
                  onClick={() => {
                    SetSelectedTopic(suggestion);
                    onHandelInputChange("Topic", suggestion);
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
      </div>
      <Button className="mt-3" size="sm" onClick={GenerateScript}>
        <SparklesIcon className="mr-2" /> Generate Script
      </Button>
    </div>
  );
}

export default Topic;
