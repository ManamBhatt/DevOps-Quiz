import OpenAI from 'openai';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    'OpenAI API key is missing. Please add VITE_OPENAI_API_KEY to your .env file.'
  );
}

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true
});

export const generateChatResponse = async (messages: { role: 'user' | 'assistant'; content: string }[]) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a DevOps expert assistant. Provide detailed, accurate answers about DevOps practices, tools, and methodologies. Include practical examples where appropriate."
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
};

export const generateQuizQuestions = async (topic: string, difficulty: string) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a DevOps expert creating quiz questions. Generate 10 multiple-choice questions about ${topic} at ${difficulty} level. Format the response as a JSON array with questions, options, and correct answers.`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    return JSON.parse(response.choices[0].message.content || '[]');
  } catch (error) {
    console.error('Error generating quiz questions:', error);
    throw error;
  }
};