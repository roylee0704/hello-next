import React from 'react'

const PostBox = () => {
  return (
    // note(roy):
    // 1. sticky will cause the div to stop at top-20
    // 2. [20rem] happen to be the height of header.
    <div className="sticky top-20 z-50 rounded-md border-4 border-solid border-green-500 bg-green-100 p-2">
      PostBox
    </div>
  )
}

export default PostBox
