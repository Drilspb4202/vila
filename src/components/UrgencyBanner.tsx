"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { retreatData } from "@/data/retreat";

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Устанавливаем дату окончания акции (например, через 3 дня)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    endDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex items-center mb-2 md:mb-0">
            <span className="animate-pulse mr-2">🔥</span>
            <span className="font-semibold">
              АКЦИЯ! Скидка до 16 000₽ заканчивается через:
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Countdown Timer */}
            <div className="flex space-x-2 text-sm">
              <div className="bg-white/20 rounded px-2 py-1">
                <span className="font-bold">{timeLeft.days}</span>
                <div className="text-xs">дней</div>
              </div>
              <div className="bg-white/20 rounded px-2 py-1">
                <span className="font-bold">{timeLeft.hours}</span>
                <div className="text-xs">часов</div>
              </div>
              <div className="bg-white/20 rounded px-2 py-1">
                <span className="font-bold">{timeLeft.minutes}</span>
                <div className="text-xs">минут</div>
              </div>
              <div className="bg-white/20 rounded px-2 py-1">
                <span className="font-bold">{timeLeft.seconds}</span>
                <div className="text-xs">секунд</div>
              </div>
            </div>

            {/* Spots Left */}
            <div className="flex items-center ml-4">
              <span className="animate-pulse mr-2">⚡</span>
              <span className="text-sm font-medium">
                Осталось {retreatData.urgency.spotsLeft} места
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
