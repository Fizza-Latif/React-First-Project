import React from 'react'
import {AboutCardsData } from '../../../data/about-cards.jsx'

export default function AboutCard({stagger=false}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10'>
      {AboutCardsData.map((card,index) => (
        <div
          key={card.id}
          className={`border p-6 rounded-lg shadow-md m-4 transition-transform duration-300
            ${stagger ? (index % 2 === 0 ? "translate-y-[-20px]" : "translate-y-[20px]") : ""}`}
        >
          <div className='mb-4 text-primary'>{card.icon}</div>
          <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
