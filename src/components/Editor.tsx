import { useState } from 'react'
import ReactQuill from 'react-quill'

// Estilo do editor
import '../styles/quill.snow.css'

export default function Editor() {
  const [editorHtml, setEditorHtml] = useState<string>('')

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
    ],
  }

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
      />
    </div>
  )
}
