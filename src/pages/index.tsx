import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button"
import Herosection from "@/components/Herosection";
import Service from "@/components/Service";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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


