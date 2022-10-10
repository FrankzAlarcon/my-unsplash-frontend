import { useContext } from "react"
import { ContextProps, UnsplashContext } from "../context/UnsplashProvider"

export const useUnsplash = () => {
  return useContext(UnsplashContext) as ContextProps['defaultContext']
}