import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import PostBox from '../components/PostBox'
import TopCommunity from '../components/TopCommunity'

const AnyPage: NextPage = () => {
  return (
    // 1. this page starts after header.
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
  )
}

export default AnyPage
