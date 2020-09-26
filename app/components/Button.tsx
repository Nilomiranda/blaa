import React from "react"

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
}

const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-700 text-white px-32 py-2 mt-4 rounded ${disabled ? "opacity-50" : ""}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {
    return
  },
}

export default Button
