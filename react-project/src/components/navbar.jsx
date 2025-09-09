import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className='flex items-center justify-center gap-4 p-4 bg-blue-500 text-white'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
