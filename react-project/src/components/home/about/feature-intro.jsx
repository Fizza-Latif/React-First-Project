import React from 'react'

export default function FeatureIntro({ title2, subtitle2 }) {
  return (
    <div className='w-full text-center my-30 '>
      <h2 className='text-5xl font-bold mb-4'>{title2}</h2>
      <p >{subtitle2}</p>
    </div>
  )
}
