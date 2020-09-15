import React, { InputHTMLAttributes } from "react"

const Input = (props: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <input {...props} className="rounded-md border-2 py-1 pl-2 border-gray-400 bg-gray-100 my-2" />
  )
}

export default Input
