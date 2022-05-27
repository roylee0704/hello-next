import React from 'react'
import Post from './Post'

const posts = Array(1000).fill(0)
const Feed = () => {
  return (
    <div className="mt-5 flex-1 space-y-5 border-4 border-yellow-500 bg-yellow-200">
      {posts.map((post, idx) => (
        <Post key={idx} />
      ))}
    </div>
  )
}

export default Feed
