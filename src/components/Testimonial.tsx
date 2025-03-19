import React from 'react'

import TestimonialCard from './TestimonialCard'
const Testimonial = () => {
  return (
    <div>
        <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The process was incredibly smooth. My LLC was formed in just days and I received all my documents promptly."
              author="Michael Johnson"
              company="Johnson Consulting"
            />
            <TestimonialCard 
              quote="I was surprised how easy it was. The support team answered all my questions and guided me through the entire process."
              author="Sarah Davis"
              company="Artisan Bakery LLC"
            />
            <TestimonialCard 
              quote="As a first-time business owner, I was nervous about the legal aspects. This service made everything straightforward."
              author="Robert Chen"
              company="Innovative Tech Corp"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonial