import type { AppProps } from 'next/app'
import '../styles/globals.scss'
export let version = '1.0'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
