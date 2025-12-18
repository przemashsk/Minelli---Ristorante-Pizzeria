
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MENU_DATA, APP_CONFIG } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Jesteś wirtualnym Sommelierem i Concierge restauracji Minelli w Poznaniu. 
Twoim celem jest pomaganie gościom w wyborze potraw z naszego menu, sugerowanie idealnych par wino-jedzenie oraz odpowiadanie na pytania dotyczące restauracji.
Mówisz w sposób elegancki, profesjonalny, ale ciepły i zapraszający.

Oto nasze menu:
${JSON.stringify(MENU_DATA, null, 2)}

Informacje o restauracji:
- Adres: ${APP_CONFIG.address}
- Godziny otwarcia: ${JSON.stringify(APP_CONFIG.hours)}

Jeśli gość pyta o coś spoza menu, staraj się nawiązać do kuchni włoskiej. Jeśli pyta o rezerwację, poinstruuj go, że może skorzystać z formularza na stronie.
Zawsze odpowiadaj w języku polskim.
`;

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Przepraszam, chwilowo nie mogę odpowiedzieć. Czy mogę pomóc w czymś innym?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mamy mały problem techniczny. Proszę, spróbuj ponownie za chwilę lub sprawdź nasze menu ręcznie.";
  }
}
