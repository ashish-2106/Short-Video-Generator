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
            {text: "write a two different script for 30 Seconds video on Topic: Kids Story,\n\nGive me response in JSON format and follow the schema\njson\nCopy\nEdit\n{\n  \"scripts\": [\n    {\n      \"content\": \"\"\n    }\n  ]\n}\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"(SCENE START: Upbeat, whimsical music. Open on a brightly colored illustration of a friendly-looking monster holding a small, scared-looking teddy bear.)\\n\\nVOICEOVER (Warm, inviting tone): Feeling adventurous tonight? \\n\\n(CUT TO: Quick shots of diverse children giggling while listening to a story on a tablet or phone. Animated sparkles and stars appear around them.)\\n\\nVOICEOVER: Discover a world of magical stories with characters that come alive! \\n\\n(CUT TO: Close-up of the monster hugging the teddy bear. The teddy bear now looks happy.)\\n\\nVOICEOVER: Funny monsters, brave princesses, and so much more! \\n\\n(SCENE END: Text overlay: \\\"[Your App Name/Website] - Where Stories Spark Imagination!\\\" Music swells. App logo visible.)\"\n    },\n    {\n      \"content\": \"(SCENE START: Gentle, calming music. Open on a child snuggled in bed with a parent reading aloud from a book, softly illuminated by a bedside lamp.)\\n\\nVISUAL: Focus on the expressions of the child and parent, radiating warmth and connection.\\n\\nVOICEOVER (Soft, reassuring tone): Bedtime stories made easy.\\n\\n(CUT TO: A montage of beautifully illustrated pages turning, showcasing different stories – a pirate ship, a forest, a castle.)\\n\\nVOICEOVER: Explore exciting adventures and learn valuable lessons.\\n\\n(CUT TO: Child yawning contentedly, eyes closing as the parent kisses their forehead.)\\n\\nVOICEOVER: Create lasting memories, one story at a time. \\n\\n(SCENE END: Text overlay: \\\"[Your App Name/Website] - Sweet Dreams Begin Here!\\\" App logo visible. Music fades.)\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 