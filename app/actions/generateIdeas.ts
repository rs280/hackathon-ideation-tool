'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

type TeamMember = {
  name: string;
  skills: string;
}

export async function generateIdeas(projectIdea: string, teamMembers: TeamMember[]): Promise<string> {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI)

    if (!genAI) {
      throw new Error('Failed to initialize GoogleGenerativeAI')
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' })
    const prompt = `
      Given the following project idea for a hackathon: "${projectIdea}"

      And the following team members and their skills:
      ${teamMembers.map(member => `- ${member.name}: ${member.skills}`).join('\n')}

      Generate ideas for both frontend and backend aspects of the project. Provide the following:

      1. Frontend:
         - List 3-5 potential features
         - Suggest 3-5 relevant technologies or frameworks
         - Propose 2-3 design ideas or UI/UX concepts

      2. Backend:
         - Recommend an overall architecture approach
         - Suggest a suitable database solution
         - List 3-5 relevant backend technologies or services

      3. Team Analysis:
         - Identify the skills that the team already possesses
         - List any missing skills that would be beneficial for the project
         - Suggest how to distribute tasks based on team members' skills

      4. Presentation Tips:
         - Provide 3-5 tips for effectively presenting the project
         - Suggest key points to highlight during the presentation
         - Recommend a presentation outline

      Format your response as a well-structured markdown document with appropriate headings, subheadings, and bullet points.
    `

    const result = await model.generateContent(prompt)
    if (!result.response) {
      throw new Error('No response from Gemini API')
    }
    const responseText = result.response.text()
    if (!responseText) {
      throw new Error('Empty response from Gemini API')
    }
  
    return responseText
  } catch (error) {
    console.error('Error in generateIdeas:', error)
    if (error instanceof Error) {
      throw new Error(`Failed to generate ideas: ${error.message}`)
    } else {
      throw new Error('An unknown error occurred while generating ideas')
    }
  }
}

