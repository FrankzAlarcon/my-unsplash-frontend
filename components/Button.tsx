import { useState } from "react"
import { useUnsplash } from "../hooks/useUnsplash"

interface Props {
  text: string
}

export default function Button({ text }: Props) {
  const { updateShowModal } = useUnsplash();

  return (
    <button
      className="bg-green-500 text-white font-bold text-sm p-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
      onClick={() => updateShowModal(true)}
    >{text}</button>
  )
}
