const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const generateScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "write a two different script for 30 Seconds video on Topic: Kids Story,\n\nGive me response in JSON format and follow the schema\n{\n  \"scripts\": [\n    {\n      \"content\": ' '\n    },\n  ],\n}" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"**Visuals:** (0-5 seconds) Open on a vibrant, hand-drawn illustration of a friendly-looking dragon sitting in a field of colorful flowers. \\n\\n**(5-10 seconds) Voiceover:** \\\"Once upon a time, in a land filled with magic...\\\" \\n\\n**(10-20 seconds) Visuals:** Quick cuts of different storybook-style images: a brave knight, a mischievous fairy, a sparkling castle. \\n\\n**(20-25 seconds) Voiceover:** \\\"...adventures were waiting around every corner!\\\" \\n\\n**(25-30 seconds) Visuals:** Return to the dragon illustration. Text overlay: \\\"Discover a world of stories! [Your Company/App Name]\\\"\\n\\n**(Sound:** Upbeat, whimsical music throughout.)\"\n    },\n    {\n      \"content\": \"**Visuals:** (0-3 seconds) Close-up shot of a child's hands turning the page of an illustrated book. \\n\\n**(3-12 seconds) Voiceover:** \\\"Is your child ready for an adventure?\\\" (Sound of gentle page turn) \\n\\n**(12-20 seconds) Visuals:** Montage of kids smiling and laughing while looking at tablets/phones displaying colorful storybook scenes.  \\n\\n**(20-25 seconds) Voiceover:** \\\"[Your Company/App Name] brings stories to life!\\\" \\n\\n**(25-30 seconds) Visuals:**  Screen recording showcasing the app interface and its features (e.g., interactive elements, read-aloud function). Text overlay: \\\"Download [Your Company/App Name] today!\\\" (Show App store logos)\\n\\n**(Sound:**  Warm, inviting music with children's laughter in the background.)\"\n    }\n  ]\n}\n```" },
      ],
    },
  ],
});

export const GenerateImageScript = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate Image prompt of {style} style with all the details for each scene for 30 seconds video:script:{script}\n-Just give specifing image prompt depends on the story line\n- do not give camera angle image prompt\n- follow the following schema and return JSON data (max 4-5 Images)\n-[{\n  imagePrompt:'',\n  sceneContent:'<script Content>'\n  }]" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "I am unable to generate images directly. That capability is only enabled for the \"Gemini 2.0 Flash Experimental\" model when the selected output format is \"Images and text\". However, I can provide you with a JSON structure containing detailed image prompts based on your script and style, as requested.\n\nPlease provide the script and desired style, and I will generate the JSON data for you.\n" },
      ],
    },
    {
      role: "user",
      parts: [
        { text: "Generate Image prompt of Cinematic style with all deatils for each scene for 30 seconds video : script: Rosa Parks refused \nto give up her seat on a bus in 1955. Her quiet act of defiance sparked the Montgomery Bus Boycott, a pivotal moment in \nthe Civil Rights Movement. One person's bravery can inspire lasting change for everyone \n• Just Give specifing image prompt depends on the story line \n• do not give camera angle image prompt \n• Follow the Folowing schema and return JSON data (Max 4-5 Images) \n• [{\nimagePrompt:\", \nsceneContent: '<Script Content>\n}]\n" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n[\n  {\n    \"imagePrompt\": \"A tired Rosa Parks, an African American woman in her 40s, sits wearily in a mostly empty bus seat. The bus interior is dimly lit, reflecting the mood of the evening. Clothes show the style of the mid-1950s. Subtle details highlight the segregation era. A few other passengers are visible, some white, looking indifferent.\",\n    \"sceneContent\": \"Rosa Parks refused to give up her seat on a bus in 1955.\"\n  },\n  {\n    \"imagePrompt\": \"A white bus driver, stern and imposing, stands over Rosa Parks, demanding she give up her seat. The atmosphere is tense. The faces of other passengers reflect a mixture of discomfort, apprehension, and silent disapproval. The setting is inside the bus, highlighting the cramped space and the social divide.\",\n    \"sceneContent\": \"...\"\n  },\n  {\n    \"imagePrompt\": \"Rosa Parks is being arrested by police officers after refusing to give up her seat on a bus. A small crowd is starting to gather, witnessing the event. The scene is set at night, with streetlights casting long shadows. The mood is heavy and somber, foreshadowing the significance of this act.\",\n    \"sceneContent\": \"...\"\n  },\n  {\n    \"imagePrompt\": \"A large group of African Americans stand united, holding signs and banners, protesting in front of parked buses. The setting is a sunny day, giving a sense of hope and determination. Banners display slogans related to civil rights and equality. The image conveys the scale and momentum of the Montgomery Bus Boycott.\",\n    \"sceneContent\": \"Her quiet act of defiance sparked the Montgomery Bus Boycott, a pivotal moment in the Civil Rights Movement.\"\n  },\n  {\n    \"imagePrompt\": \"An older, dignified Rosa Parks smiles gently, looking out at a diverse crowd of people. The scene is set at a civil rights event or commemoration, years after the boycott. Her presence exudes strength and resilience. The image conveys the lasting impact of her actions and the progress made in the fight for equality.\",\n    \"sceneContent\": \"One person's bravery can inspire lasting change for everyone.\"\n  }\n]\n```\n" },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());


