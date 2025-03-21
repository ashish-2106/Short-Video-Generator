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

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());


