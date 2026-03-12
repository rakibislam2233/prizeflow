import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const CallToActionBanner: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-green-500 to-green-600  p-8 sm:p-12 md:p-16 text-center">
      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to start winning
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-green-50 mb-8 sm:mb-10 leading-relaxed">
          Join thousands of winners and enter your first competition today!
        </p>

        {/* CTA Button */}
        <Button className="bg-white text-green-600 hover:bg-green-50 border-0 h-12 sm:h-14 px-6 sm:px-8 rounded-md cursor-pointer transition-all duration-300 group">
          Brows all competition
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

export default CallToActionBanner;
