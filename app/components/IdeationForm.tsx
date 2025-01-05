'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { generateIdeas } from '../actions/generateIdeas'

type TeamMember = {
  name: string;
  skills: string;
}

export default function IdeationForm({ onSaveIdea }: { onSaveIdea: (idea: string) => void }) {
  const [projectIdea, setProjectIdea] = useState('')
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([{ name: '', skills: '' }])
  const [loading, setLoading] = useState(false)
  const [ideas, setIdeas] = useState<string | null>("")
  const [error, setError] = useState<string | null>(null)

  const handleAddTeamMember = () => {
    setTeamMembers([...teamMembers, { name: '', skills: '' }])
  }

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers]
    updatedMembers[index][field] = value
    setTeamMembers(updatedMembers)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setIdeas(null)
    try {
      console.log('Submitting project idea:', projectIdea)
      console.log('Team members:', teamMembers)
      const generatedIdeas = await generateIdeas(projectIdea, teamMembers) as string
      console.log('Received generated ideas:', generatedIdeas)
      setIdeas(generatedIdeas)
    } catch (error) {
      console.error('Error generating ideas:', error)
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Describe your project idea..."
          value={projectIdea}
          onChange={(e) => setProjectIdea(e.target.value)}
          className="min-h-[100px]"
          required
        />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Team Members</h3>
          {teamMembers.map((member, index) => (
            <div key={index} className="flex space-x-2">
              <Input
                placeholder="Name"
                value={member.name}
                onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                required
              />
              <Input
                placeholder="Skills (comma-separated)"
                value={member.skills}
                onChange={(e) => handleTeamMemberChange(index, 'skills', e.target.value)}
                required
              />
            </div>
          ))}
          <Button type="button" onClick={handleAddTeamMember} variant="outline">
            Add Team Member
          </Button>
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? 'Generating Ideas...' : 'Generate Ideas'}
        </Button>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {ideas && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Ideas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <ReactMarkdown>{ideas}</ReactMarkdown>
            </div>
            <Button onClick={() => onSaveIdea(ideas)} className="mt-4">
              Save Idea
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

