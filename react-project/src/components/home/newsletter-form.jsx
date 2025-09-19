import React from 'react'

export default function NewsletterForm() {
  return (
    <div>
      <form className="flex ">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-2 rounded-l-md border border-gray-600 focus:outline-none"
        />
        <button className="bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-r-md">
          Subscribe
        </button>
      </form>
    </div>
  )
}
