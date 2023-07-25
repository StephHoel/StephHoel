import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

export default function Links({ href, children }: Props) {
  return (
    <a href={href} className="text-blue-400 hover:text-blue-300 cursor-pointer">
      {children}
    </a>
  )
}
