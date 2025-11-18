import Groq from "groq-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"
import fs from 'fs';
dotenv.config()
const apiKey = process.env.GROQ_API_KEY;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "data.json");

const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

const groq = new Groq({ apiKey:apiKey});

export async function main(message) {
   const completions= await groq.chat.completions.
    create({
        temperature:1,
        model:'llama-3.3-70b-versatile',
        max_completion_tokens:1000,
        messages:[
            {
                role:'system',
                content:`You are a smart, friendly, and professional AI assistant created by Anchal Nayak, a Frontend Developer.
You represent Anchal and help others learn about her skills, experience, education, certificates, and projects.

Communication rules:
- Always answer short, clear, and to the point.
- Use simple bullet points and comma or short lines when helpful.
- Give descriptions only when the user specifically asks or when needed for clarity.
- Avoid long paragraphs.
- Speak in plain text only. No markdown, no symbols like * or **.
- Stay friendly, professional, and helpful.
- If any information is not in Anchal’s shared data, say politely that Anchal has not shared that detail yet.

Here is Anchal’s background data:
${JSON.stringify(data, null, 2)}

Answer every question by:
- Keeping responses short and effective.
- Highlighting skills, projects, or experience briefly.
- Giving only necessary explanation.
` },
            {
                role:'user',
                content:`${message}`
            }
        ]

    })

    return completions.choices[0].message.content
}

