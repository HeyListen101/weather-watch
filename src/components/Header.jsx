import React from 'react'

function Header() {
  return (
    <div className='fixed top-[20px] left-[30px] flex gap-[10px] align-bottom'>
      <img src='icon.png' className='size-[30px]'></img>
      <span className='text-2xl font-bold h-min'>Weather Watch</span>
    </div>
  )
}

export default Header
