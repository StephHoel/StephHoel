import { useState } from 'react'

import MarkdownEditor from '../components/MarkdownEditor'
import MarkdownViewer from '../components/MarkdownViewer'

export default function NewPost() {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  return (
    <div className="mx-auto w-3/4 ">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        className="rounded-xl bg-gray-400 w-full py-2 px-4 mb-4 outline-none
        placeholder:text-[rgba(0,0,0,0.6)] placeholder:italic 
        "
      />

      <MarkdownEditor onChange={setContent} />

      {/* <MarkdownViewer markdown={content} /> */}

      <div className="flex gap-4 mt-4">
        <button className="rounded bg-gray-400 py-2 px-4 w-1/2 text-[rgba(0,0,0,0.6)] hover:bg-gray-500">
          Rascunho
        </button>
        <button className="rounded bg-gray-400 py-2 px-4 w-1/2 text-[rgba(0,0,0,0.6)] hover:bg-gray-500">
          Postar
        </button>
      </div>
    </div>
  )
}
