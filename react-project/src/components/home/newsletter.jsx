import React from 'react'
import NewsletterForm from './newsletter-form'

export default function Newsletter() {
  return (
    <div className="  py-25 md:py-30 md:p-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center font-bold mb-4">Get 10% on your first order</h2>
        <p className="text-center mb-10">Plus exclusive access to product drops, style tips, and insider deals.</p>
        <NewsletterForm />
        
      </div>
    </div>
  )
}
