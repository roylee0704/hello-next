import classNames from 'classnames'
import React from 'react'

const Side = () => {
  const styles = {
    stickUnderHeader: 'sticky top-[4rem] z-50 mt-0',
    screenSizeHeight: 'max-h-[0] min-h-[calc(100vh-4.5rem)]',
    scrollable: 'overflow-y-scroll',
  }

  return (
    <div
      className={classNames(
        styles.stickUnderHeader,
        styles.screenSizeHeight,
        styles.scrollable,
        'min-w-[280px]',
        'max-w-[300px]',
        ' border-red-800',
        'bg-blue-100',
        'hidden md:block'
      )}
    >
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
      <p>Menu Item</p>
    </div>
  )
}

export default Side
