import React from 'react'

export default function Hero() {
  return (
    <div>
      <div
  className="w-full h-[500px] flex justify-center flex-col items-center text-orange-00 font-bold text-5xl bg-[url('/images/bg-img.jpg')] bg-cover bg-center relative"
>
  <div className="absolute inset-0 bg-gray-600/50"></div>
  
  <h1 className="text-5xl text-white mb-4 relative z-10">What are you looking for?</h1>
    <p className="text-lg font-normal text-white max-w-xl relative z-10">
      Discover a world of products at unbeatable prices. Shop easily, safely.
    </p>
</div>
    </div>
  )
}
