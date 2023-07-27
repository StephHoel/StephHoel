import { ReactNode, useState } from 'react'

interface Props {
  title: string
  date: string
  children: ReactNode
}

export default function Toggle({ title, date, children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className="space-y-4 mb-8">
      <div className="flex justify-between items-center">
        <p onClick={handleToggle} className="text-4xl cursor-pointer">
          {title}
        </p>
      </div>

      {isExpanded && (
        <div>
          <p className="text-xl ml-8 -mt-4 mb-4 text-gray-300">{date}</p>
          {children}
          <div
            className="text-right mt-8 dk:cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <i className="ph ph-arrow-circle-up text-5xl" />
          </div>
        </div>
      )}
    </div>
  )
}
