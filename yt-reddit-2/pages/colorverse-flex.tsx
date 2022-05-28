import React from 'react'
import Chat from '../components/colorverse-flex/Chat'
import Header from '../components/colorverse-flex/Header'
import Main from '../components/colorverse-flex/Main'
import Side from '../components/colorverse-flex/Side'

const ColorverseFlex = () => {
  return (
    <div className="h-screen w-[100vw] overflow-y-auto border-4 border-blue-400">
      <Header />

      {/* removing the height, sticky will work  */}
      {/* max-h-[0] */}
      <div className="mt-[3.2rem] flex space-x-5 border-4 border-black">
        <Side />
        <Chat />
      </div>
    </div>
  )
}

export default ColorverseFlex
