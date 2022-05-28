import React from 'react'

const blank = () => {
  return (
    <div className="border-4 border-blue-500">
      Parent element
      <div className="t-[10px] relative mt-[10px] border-4 border-red-400 p-[20px]">
        Child element
      </div>
    </div>
  )
}

export default blank
