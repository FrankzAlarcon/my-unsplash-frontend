import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UnsplashProvider from '../context/UnsplashProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UnsplashProvider>
      <Component {...pageProps} />
    </UnsplashProvider>
  )
}

export default MyApp
