import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

const rolePrompts = {
  student: `You are an AI educational assistant for students. You help with:
- Homework and assignment explanations
- Study tips and learning strategies  
- Subject-specific questions and concepts
- Time management and organization
- Exam preparation and test-taking strategies
Be encouraging, patient, and provide clear explanations suitable for the student's level.`,

  teacher: `You are an AI assistant for teachers. You help with:
- Lesson planning and curriculum design
- Student assessment and grading strategies
- Classroom management techniques
- Educational technology recommendations
- Professional development suggestions
Be professional and provide practical, evidence-based educational strategies.`,

  parent: `You are an AI assistant for parents. You help with:
- Understanding your child's academic progress
- Supporting learning at home
- Communication with teachers and school
- Educational resource recommendations
- Child development and learning concerns
Be supportive and provide practical parenting advice related to education.`,

  admin: `You are an AI assistant for school administrators. You help with:
- School management and operations
- Policy development and implementation
- Staff coordination and development
- Budget and resource planning
- Data analysis and reporting
Be strategic and provide insights for effective school leadership.`
};

export async function generateAIResponse(
  message: string, 
  role: UserRole, 
  apiKey?: string
): Promise<string> {
  try {
    if (!apiKey) {
      return `Hello! I'm your AI assistant for ${role}s. 🤖

To unlock full AI capabilities, please:
1. Click the ⚙️ Settings button above
2. Enter your OpenAI API key (starts with "sk-proj-...")
3. Get your key from: https://platform.openai.com/api-keys

For now, here's a sample response for "${message}":

${getSampleResponse(message, role)}`;
    }

    const openaiClient = createOpenAI({ apiKey });
    
    const { text } = await generateText({
      model: openaiClient('gpt-4o-mini'),
      system: rolePrompts[role],
      prompt: message,
    });

    return text;
  } catch (error) {
    console.error('AI Generation Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    if (errorMessage.includes('401') || errorMessage.includes('invalid_api_key')) {
      return `❌ Invalid API key. Please check your OpenAI API key in settings.

Make sure your key:
- Starts with "sk-proj-..."
- Is from https://platform.openai.com/api-keys
- Has sufficient credits

Here's a sample response instead:

${getSampleResponse(message, role)}`;
    }
    
    return `I encountered an error: ${errorMessage}

Please try again or check your API key. Here's a sample response:

${getSampleResponse(message, role)}`;
  }
}

function getSampleResponse(message: string, role: UserRole): string {
  const lowerMessage = message.toLowerCase();
  
  if (role === 'student') {
    if (lowerMessage.includes('math') || lowerMessage.includes('algebra')) {
      return "I'd be happy to help with math! Break down complex problems into smaller steps, practice regularly, and don't hesitate to ask for clarification on concepts you find challenging.";
    }
    if (lowerMessage.includes('study') || lowerMessage.includes('exam')) {
      return "For effective studying, try the Pomodoro Technique: 25 minutes focused study, 5-minute break. Create a study schedule, use active recall, and practice past exams.";
    }
    return "I'm here to help with your studies! Whether it's homework, test prep, or learning new concepts, I can provide explanations and study strategies tailored to your needs.";
  }
  
  if (role === 'teacher') {
    if (lowerMessage.includes('lesson') || lowerMessage.includes('plan')) {
      return "For effective lesson planning, start with clear learning objectives, incorporate multiple learning styles, include interactive elements, and plan for assessment. Would you like specific strategies for your subject area?";
    }
    return "I can assist with lesson planning, classroom management, assessment strategies, and professional development. What specific teaching challenge can I help you with today?";
  }
  
  if (role === 'parent') {
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "Supporting your child's education at home is crucial! Create a dedicated study space, establish routines, communicate regularly with teachers, and celebrate learning achievements.";
    }
    return "I'm here to help you support your child's educational journey. From homework help to communication with teachers, I can provide guidance on various aspects of your child's academic life.";
  }
  
  // admin
  if (lowerMessage.includes('manage') || lowerMessage.includes('policy')) {
    return "Effective school management requires clear policies, regular communication with staff, data-driven decisions, and focus on student outcomes. What specific administrative challenge are you facing?";
  }
  return "I can help with school administration tasks including policy development, staff management, resource planning, and operational efficiency. What would you like assistance with?";
}