"use client";
import { Button } from "@/components/ui/button";
import { sliderData } from "@/data/sliderData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto pagination
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-screen md:min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundImage: "url('/asset/home/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Abstract Background Diagonal Shapes */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div
          className="absolute top-[-20%] right-0 w-[80%] h-[150%] bg-[#5E1DB1]/30 -rotate-45 origin-top-right transform translate-x-[20%]"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[80%] bg-[#811AD6]/40 -skew-x-40 origin-bottom-right" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-14 relative z-10 w-full pt-28 sm:pt-32 md:pt-36 lg:pt-16 pb-20 lg:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8"
          >
            {/* Left Content */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-4">
                {sliderData[currentSlide].title1} <br />
                {sliderData[currentSlide].title2}
              </h1>

              <p className="text-[#A4AEDE] text-base lg:text-lg xl:text-xl md:pr-10 mb-8 font-light leading-relaxed">
                {sliderData[currentSlide].subtitle}
              </p>

              <div>
                <p className="text-gray-300 text-sm mb-1.5 font-medium tracking-wide">
                  Draw count down
                </p>
                <CountdownTimer targetDate={sliderData[currentSlide].endDate} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center lg:justify-start">
                <Button className="bg-primary hover:bg-primary/90 text-white border-0 h-12 px-6 sm:px-8 cursor-pointer text-base  transition-all w-full sm:w-auto">
                  Entry now
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-[#29427D] text-[#869FD1] hover:text-white hover:bg-[#29427D]/40 h-12 px-6 sm:px-8 cursor-pointer text-base transition-all w-full sm:w-auto"
                >
                  How it work
                </Button>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  type: "spring",
                  bounce: 0.3,
                }}
                className="relative w-full h-full flex items-center justify-center max-w-[700px] sm:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px]"
              >
                <Image
                  src={sliderData[currentSlide].image}
                  alt="Prize Showcase"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-10 bg-white"
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
