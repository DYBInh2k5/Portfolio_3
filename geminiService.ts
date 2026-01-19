
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from "./constants";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Võ Duy Bình's portfolio. 
Bình is a highly skilled Full Stack Developer and AI Specialist from Ho Chi Minh City, Vietnam.
Expertise: Web Dev, AI/ML, App Dev, Digital Marketing.
Current Focus: AI Integration, Cloud Architecture, Performance Optimization.

Portfolio Details:
- Experience: ${PERSONAL_INFO.experience}
- Skills: ${JSON.stringify(SKILL_CATEGORIES.map(c => c.skills))}
- Projects: ${JSON.stringify(PROJECTS)}
- GitHub: ${PERSONAL_INFO.github}

Rules:
1. Be professional, friendly, and technically knowledgeable.
2. Answer questions about Bình's skills, experience, and projects.
3. If asked about something not in his profile, politely mention you only have information about his professional background.
4. Keep responses concise and engaging.
5. You can answer in both English and Vietnamese.
`;

export const chatWithBinhAI = async (message: string): Promise<string> => {
  try {
    // Create a new GoogleGenAI instance right before making an API call to ensure it always uses the up-to-date API key.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // The response.text property returns string | undefined. We provide a default string to avoid type errors in UI state.
    return response.text ?? "I'm sorry, I couldn't generate a response at the moment. Please try again or contact me via email.";
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble connecting right now. Please check out my GitHub or contact me via email!";
  }
};
