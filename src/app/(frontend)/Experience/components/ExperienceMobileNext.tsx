"use client";

import { ChevronRight } from "lucide-react";

const ExperienceMobileNext = ({ handleNext }: any) => (
  <div className="md:hidden container mx-auto px-4 py-6">
    <div className="flex justify-center">
      <button
        onClick={handleNext}
        className="flex items-center text-pink-700 font-medium"
      >
        <span>Next experience</span>
        <ChevronRight size={20} className="ml-1" />
      </button>
    </div>
  </div>
);

export default ExperienceMobileNext;
