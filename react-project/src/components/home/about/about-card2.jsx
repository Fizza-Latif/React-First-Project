import React from 'react'
import { AboutCardsData2 } from '../../../data/about-cards.jsx'

export default function AboutCard2() {
  return (
    <div>
      {AboutCardsData2.map((card, index) => (
        <div key={index} className={`flex flex-row justify-between`} >
          <div className="md:w-5/12 w-full mb-6 md:mb-0 border-1 rounded">
            <div className="text-4xl mb-4 text-red-500">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
