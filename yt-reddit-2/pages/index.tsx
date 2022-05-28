import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="mx-auto mt-36 w-[500px] ">
      <Head>Page Layout</Head>

      <div className="flex flex-col items-center space-y-4">
        <Link href="/reddit">
          <span className="min-w-[10rem] cursor-pointer border-4 border-red-400 px-4 py-2 text-center">
            View Reddit
          </span>
        </Link>
        <Link href="/colorverse">
          <span className="min-w-[10rem] cursor-pointer border-4 border-red-400 px-4 py-2 text-center">
            View Colorverse (absolute)
          </span>
        </Link>

        <Link href="/colorverse-flex">
          <span className="min-w-[10rem] cursor-pointer border-4 border-red-400 px-4 py-2 text-center">
            View Colorverse (flex)
          </span>
        </Link>
        <Link href="/tiktok">
          <span className="min-w-[10rem] cursor-pointer border-4 border-red-400 px-4 py-2 text-center">
            View TikTok
          </span>
        </Link>
        <Link href="/blank">
          <span className="min-w-[10rem] cursor-pointer border-4 border-red-400 px-4 py-2 text-center">
            View Blank
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Home
