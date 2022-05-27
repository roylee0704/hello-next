import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/reddit/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
