import React from 'react'
import ProcessCard from './ProcessCard'


const Process = () => {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Our simple 3-step process makes forming your business quick and hassle-free</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard 
              number={1} 
              title="Provide Information" 
              description="Complete our simple form with details about your business."
            />
            <ProcessCard 
              number={2} 
              title="Make Payment" 
              description="After filling the form make payment."
            />
            <ProcessCard 
              number={3} 
              title="We File Everything" 
              description="We prepare and submit all documents to the proper agencies."
            />
          </div>
        </div>
      </section>
  )
}

export default Process