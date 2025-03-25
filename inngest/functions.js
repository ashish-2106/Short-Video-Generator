import axios from "axios";
import { inngest } from "./client";
import { createClient } from "@deepgram/sdk";
import { GenerateImageScript } from "@/configs/AiModel";

const ImagePromptScript = `Generate Image prompt of {style} style with all the details for each scene for 30 seconds video:script:{script}
-Just give specifing image prompt depends on the story line
- do not give camera angle image prompt
- follow the following schema and return JSON data (max 4-5 Images)
-[{
  imagePrompt:'',
  sceneContent:'<script Content>'
  }]`
export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

const BASE_URL = 'https://aigurulab.tech';
export const GenerateVideoData = inngest.createFunction(
  { id: 'generate-video-data' },
  { event: 'generate-video-data' },
  async ({ event, step }) => {

    const { script, topic, title, caption, videostyle, voice } = event?.data;
    //Generate Audio File MP3
    const GenerateAudioFile = await step.run(
      "GenerateAudioFile",
      async () => {
        // const result = await axios.post(BASE_URL + '/api/text-to-speech',
        //   {
        //     input: script,
        //     voice: voice
        //   },
        //   {
        //     headers: {
        //       'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
        //       'Content-Type': 'application/json', // Content Type
        //     },
        //   })
        // console.log(result.data.audio) //Output Result: Audio Mp3 Url
        // return result.data.audio;
        return "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/audio%2F1742894175383.mp3?alt=media&token=eda928e2-a8af-4ed3-973c-4b6daeac67ee"
      }
    )

    //Generate Captions
    // const GenerateCaptions = await step.run(
    //   "generateCaptions",
    //   async () => {
    //     const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);
    //     //STEP 2: Call the transcribeUrl method with the audio payload and options
    //     const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    //       {
    //         url: GenerateAudioFile,
    //       },
    //       // STEP 3: Configure Deepgram options for audio analysis
    //       {
    //         model: "nova-3",
    //       }
    //     );
    //     return result.results?.channels[0]?.alternatives[0]?.words;
    //   }
    // )

    //Generate ImagePrompt from Script
     const GenerateImagePrompt = await step.run(
      "generateImagePrompt",
      async() =>{
        const FINAL_PROMPT= ImagePromptScript.replace('{style}',videostyle).replace('{script}',script)
        const result =await GenerateImageScript.sendMessage(FINAL_PROMPT)
        const resp=JSON.parse(result.response.text());

        return resp;
      }
     )
    //Generate Images

    //save All data to DB
    return GenerateImagePrompt

  }
)