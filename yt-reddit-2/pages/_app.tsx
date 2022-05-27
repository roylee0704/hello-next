import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-y-scroll border-8 border-solid border-slate-500 bg-slate-300">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
