'use client'

import { useState } from 'react'
import IdeationForm from './components/IdeationForm'
import Sidebar from './components/Sidebar'

export default function Home() {
  const [savedIdeas, setSavedIdeas] = useState<string[]>([])

  const handleSaveIdea = (idea: string) => {
    setSavedIdeas([...savedIdeas, idea])
  }

  return (
    <div className="flex">
      <Sidebar savedIdeas={savedIdeas} />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-4">The Hack Pad</h1>
        <IdeationForm onSaveIdea={handleSaveIdea} />
      </main>
    </div>
  )
}

