import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, FileText, CheckCircle, Award, Users } from "lucide-react";


const Herosection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Business Formation Made Simple
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Start your LLC, Corporation, BIO Filing, or Non-Profit with our easy, fast, and affordable filing services. Guaranteed accuracy and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className=" bg-black hover:bg-black/40 text-white px-8 py-6">
                Form Your Business <ArrowRight className="ml-2" />
              </Button>
              <Button  className="bg-black hover:bg-black/40 text-white px-8 py-6">
                Explore Services
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80" 
              alt="Business professionals" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    )
}

export default Herosection