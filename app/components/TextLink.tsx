import React from "react"

interface TextLinkProps {
  children: React.ReactNode
}

const TextLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="text-blue-700 cursor-pointer hover:underline"
    >
      {children}
    </a>
  )
})

export default TextLink
