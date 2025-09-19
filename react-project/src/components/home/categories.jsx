import React from 'react'

export default function Categories() {
  const categories = [
    { name: "Mens Wear", image: "/images/men.jpg" },
    { name: "Womens Wear", image: "/images/women.jpg" },
    { name: "Kids Wear", image: "/images/kids.jpg" },
    { name: "Accessories", image: "/images/accessories.jpg" }
  ];
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-10'>Our Categories</h1>
      <p className='text-center mt-4'>Explore a wide range of styles, handpicked to suit every taste and need.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-20 justify-center mt-12 p-5'>
        {categories.map((category) => (
          <div key={category.name} className='mx-4 relative'>
            
            <img src={category.image} alt={category.name} className='w-full md:h-96 border-2 object-cover mt-2 rounded-lg shadow-md' />
            <div className='absolute text-center -bottom-20  left-1/2 transform -translate-x-1/2 bg-white px-8 w-[80%] inline-block py-5 rounded-3xl'>
                <h2 className='text-2xl font-semibold text-center mt-4'>{category.name}</h2>
                <button className='mt-2 px-4 py-2 text-red-600 font-semibold rounded-lg items-center'>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
 