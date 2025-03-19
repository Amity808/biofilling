
import React from 'react';

interface ProcessCardProps {
  number: number;
  title: string;
  description: string;
}

const ProcessCard = ({ number, title, description }: ProcessCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-black hover:bg-black/50 text-white cursor-pointer rounded-full flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessCard;
