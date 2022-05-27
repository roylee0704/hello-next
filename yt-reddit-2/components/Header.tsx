import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="sticky top-56 z-50 flex border border-red-400 bg-red-500">
      <div className="relative h-10 w-20">
        <Image src="https://links.papareact.com/fqy" layout="fill" />
      </div>

      <div className="flex-col">
        <p>hello world</p>
        <p>hello world</p>
        <p>hello world</p>
      </div>
    </div>
  )
}

export default Header
