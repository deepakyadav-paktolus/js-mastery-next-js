'use client'
import { ArrowDown } from "lucide-react";

const ExploreBtn = () => {
  return (
    <div className="flex justify-center my-4 sm:my-6">
      <a
        href="#events"
        className="
          flex items-center gap-2
          px-4 sm:px-6
          py-2 sm:py-3
          text-base sm:text-lg md:text-xl
          border rounded-xl
          hover:bg-black/30 transition
        "
      >
        Explore Events
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
};

export default ExploreBtn;