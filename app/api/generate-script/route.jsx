import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `write a 30-second video script on Topic: {topic}.
Provide the response in JSON format with the following structure:

{
  "scripts": [
    {
      "scene": "Scene description here",
      "visual": "What is happening visually",
      "voiceover": "What is being narrated"
    }
  ]
}`;

export async function POST(req){
    const {topic}=await req.json();
    const PROMPT = SCRIPT_PROMPT.replace('{topic}',topic);
    const result = await generateScript.sendMessage(PROMPT);
    const resp = result?.response?.text();

    return NextResponse.json(JSON.parse(resp));
}