import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/reddit/Feed'
import Header from '../components/reddit/Header'
import PostBox from '../components/reddit/PostBox'
import TopCommunity from '../components/reddit/TopCommunity'

const Reddit: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll border-8 border-solid border-slate-500 bg-slate-300">
      <Header />

      {/* page below starts after header. */}
      <div className="my-7 mx-auto max-w-5xl border-4 border-solid border-blue-800 bg-blue-300">
        <Head>
          <title>Reddit 2.0 Clone</title>
        </Head>
        <PostBox />
        <div className="flex">
          <Feed />
          <TopCommunity />
        </div>
      </div>
    </div>
  )
}

export default Reddit
