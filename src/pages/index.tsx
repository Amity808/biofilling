
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Service from "@/components/Service";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Herosection />
        <Service />
        <Process />
        <Testimonial />
        <CTA />
      </div>
    
    </>
  );
}


