import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Code({ children }: Props) {
  return (
    <span className="bg-gray-700 text-amber-600 w-fit px-2 py-1 rounded font-bold">
      {children}
    </span>
  )
}
