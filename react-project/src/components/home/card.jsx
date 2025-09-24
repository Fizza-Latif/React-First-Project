import React from 'react'
import CardButton from './cardbutton'
export default function Card() {
  const CardData=[
    {
      title: "Bags",
      description: "Stylish and durable bags, perfect for everyday use and travel.",
      imageUrl: "./images/bags.jpg"
    },
    {
      title: "Shoes",
      description: "Comfortable and trendy shoes designed for all-day wear.",
      imageUrl: "./images/shoes.jpg"
    },
    {
      title: "Hats",
      description: "Upgrade look with our stylish hats made for every season.",
      imageUrl: "./images/hats.jpg"
    },
    {
      title: "Shirts",
      description: "Classic and versatile shirts crafted for comfort and everyday wear.",
      imageUrl: "./images/shirts.jpg"
    }
  ];
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold text-center mt-10'>Our Products</h1>
    <div className='flex flex-row items-center justify-center gap-6 mt-10 mb-10 px-3'>
      {CardData.map((card, index) => (
        <div key={index} className=' border-1 rounded overflow-hidden shadow-lg w-70  p-2 text-center'>
          <img src={card.imageUrl} alt={card.title} />
          <h2 className='font-bold text-lg'>{card.title}</h2>
          <p>{card.description}</p>
          <CardButton />
        </div>
      ))}
    </div>
    </div>
  )
}
