
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
}

const TestimonialCard = ({ quote, author, company }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <Quote className=" text-black w-10 h-10 mb-4" />
        <p className="italic text-gray-700 mb-6">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
