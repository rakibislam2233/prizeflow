"use client";

import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return <div className="h-16"></div>; // Prevents hydration mismatch

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-2 sm:gap-3 mt-2 mb-8">
      {timeBlocks.map((block, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-[#465377]/60 backdrop-blur-md rounded px-3 sm:px-5 py-2 min-w-[50px] sm:min-w-[65px] shadow-inner"
        >
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wider">
            {block.value.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[11px] text-[#A6B2D1] mt-0.5">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
