import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Sidebar({ savedIdeas }: { savedIdeas: string[] }) {
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null)

  return (
    <div className="w-64 bg-gray-100 p-4 h-screen overflow-hidden flex flex-col">
      <h2 className="text-xl font-bold mb-4">Saved Ideas</h2>
      <ScrollArea className="flex-grow">
        {savedIdeas.map((idea, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap"
            onClick={() => setSelectedIdea(idea)}
          >
            Idea {index + 1}
          </Button>
        ))}
      </ScrollArea>
      {selectedIdea && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Selected Idea</h3>
          <div className="bg-white p-2 rounded max-h-64 overflow-y-auto">
            <pre className="whitespace-pre-wrap">{selectedIdea}</pre>
          </div>
        </div>
      )}
    </div>
  )
}

