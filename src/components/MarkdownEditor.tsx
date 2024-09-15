import { useEffect, useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'

import '../styles/easymde.min.css'

interface MarkdownEditorProps {
  onChange: (newMarkdown: string) => void
}

export default function MarkdownEditor({ onChange }: MarkdownEditorProps) {
  const [markdown, setMarkdown] = useState<string>('')

  useEffect(() => {
    // Dispare a função de retorno de chamada sempre que o conteúdo do editor mudar
    onChange(markdown)
  }, [markdown, onChange])

  return (
    <div>
      <SimpleMDE value={markdown} onChange={setMarkdown} />
    </div>
  )
}
