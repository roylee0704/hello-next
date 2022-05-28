import React from 'react'
import Header from '../components/colorverse-flex/Header'
import Main from '../components/colorverse-flex/Main'
import Side from '../components/colorverse-flex/Side'

const ColorverseFlex = () => {
  return (
    <div className="h-screen w-[100vw] overflow-y-auto  border-blue-400">
      <Header />

      {/* removing the height, sticky will work  */}
      {/* max-h-[0] min-h-[calc(100vh-4rem)] */}
      <div className="mx-auto mt-[4rem] flex border-black lg:max-w-5xl ">
        <Side />
        <Main />
      </div>
    </div>
  )
}

export default ColorverseFlex
