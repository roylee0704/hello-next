import React from 'react'
import Header from '../components/tiktok/Header'

const TikTok = () => {
  // this is easy layout if you only need to satisfy infinity scrolling.
  // doesn't work on 1 page.
  //
  // the menu is fixed, not sticky
  // there will be problem when you adjust the page width, the main will collapse to menu,
  // which is why tiktok.
  return (
    <div className="h-screen w-[100vw] overflow-y-scroll border-8 border-solid border-slate-500 bg-slate-300">
      <Header />

      <div className="mt-[4rem] flex w-[100vw] max-w-[1150px] border-4 border-black">
        <div className="relative flex w-[356px]">
          <div className="fixed top-[4rem] bottom-[0] w-[356px] overflow-y-auto border-4 border-red-500">
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
            <p>side</p>
          </div>
        </div>
        <div className="relative w-[692px] border-4 border-blue-400">
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
          <p>content...............</p>
        </div>
      </div>
    </div>
  )
}

export default TikTok
