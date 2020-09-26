import { Link } from "blitz"
import React from "react"

interface TextLinkProps {
  children: React.ReactNode
  href: string | undefined
}

const TextLink = ({ children, href }: TextLinkProps) => {
  return (
    <Link href={href}>
      <a className="text-blue-700 cursor-pointer hover:underline">{children}</a>
    </Link>
  )
}

export default TextLink
