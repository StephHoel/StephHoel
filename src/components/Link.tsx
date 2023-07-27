import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

export default function Link({ href, children }: Props) {
  return (
    <a
      href={href}
      className="dk:hover:text-blue-400"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
