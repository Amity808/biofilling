import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Business?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-white/90">Begin your business journey today with our fast, reliable filing services.</p>
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started Now <ArrowRight className="ml-2 text-black" />
          </Button>
        </div>
      </section>
  )
}

export default CTA