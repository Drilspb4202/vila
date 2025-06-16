"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-forest">
          Виллогора Ретрит
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center text-sm text-red-600 font-semibold">
            <span className="animate-pulse mr-2">🔥</span>
            Осталось 3 места
          </div>
          <Button
            variant="forest"
            onClick={scrollToBooking}
            className="hidden sm:inline-flex font-semibold"
          >
            Забронировать
          </Button>
        </div>
      </div>
    </header>
  );
}
