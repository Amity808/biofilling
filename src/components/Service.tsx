import React from 'react'
import ServiceCard from './ServiceCard'
import {FileText} from "lucide-react";




const Service = () => {
  return (
    <div>
        <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Filing Services</h2>
          <div className=" flex justify-center items-center">
          {/* grid grid-cols-1 md:grid-cols-3 gap-8 */}
            <ServiceCard 
              title="BIO Filings Services" 
              description="Form your Limited Liability Company quickly with our comprehensive filing service."
              icon={<FileText size={32} />} 
              price="From $250"
            />
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service