import React from 'react'
import { AboutSectionData } from '../../../data/about-cards.jsx'

const { title, description,description2, image, icon } = AboutSectionData[0];

export default function AboutSection() {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between py-12 md:relative`}
    >
      <div className="md:w-7/12 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-auto shadow-lg"
        />
      </div>
      <div className="md:w-5/12 w-full bg-white rounded-lg flex-col items-center justify-center  p-6 md:absolute left-3/6 top-[35%]  ">
        <div className="mb-4 text-red-500 text-4xl">{icon}</div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        <p className="text-gray-700 leading-relaxed">{description2}</p>
      </div>
    </div>
  )
}
