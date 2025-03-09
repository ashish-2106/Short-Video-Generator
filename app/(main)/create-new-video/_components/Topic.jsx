"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

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
  "Motivational Stories"
]

function Topic() {
  const [SelectTopic, SetSelectedTopic] = useState()
  return (
    <div>
      <h2 className='mb-2'>Project Title</h2>
      <Input placeholder="Enter Project title" />

      <div className='mt-5'>
        <h2>Video Topic</h2>
        <p className='text-sm text-gray-600'>Select Topic for your video</p>
        <Tabs defaultValue="Suggestion" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestion">
            <div>
              {suggestions.map((suggestion, index) => (
                <Button variant="outline" key={index} className={`m-1 ${suggestion == SelectTopic && 'bg-secondary'}`} onClick={() => SetSelectedTopic(suggestion)}>{suggestion}</Button>
              ))}
            </div>

          </TabsContent>
          <TabsContent value="your_topic">
            <div>
              <h2>Enter Your  Own  topic</h2>
              <Textarea placeholder="Enter your Topic" />
            </div>
          </TabsContent>
        </Tabs>

      </div>

    </div>
  )
}

export default Topic
