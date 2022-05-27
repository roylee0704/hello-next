import React from 'react'
import Header from '../components/colorverse/Header'
import Main from '../components/colorverse/Main'
import Side from '../components/colorverse/Side'

const colorverse = () => {
  return (
    <div className="h-screen w-[100vw] overflow-y-scroll border-8 border-solid border-slate-500 bg-slate-300">
      <Header />
      <Side />

      <Main />
    </div>
  )
}

export default colorverse
