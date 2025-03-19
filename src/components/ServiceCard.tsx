
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
}

const ServiceCard = ({ title, description, icon, price }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20">
      <CardHeader>
        <div className="mb-4 text-[#293452]">{icon}</div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-[#293452]">{price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full group bg-black hover:bg-black/50 text-white">
          Learn More 
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
