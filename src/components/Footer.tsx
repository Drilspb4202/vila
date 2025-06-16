"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const handleInstagramClick = () => {
    // Замените на реальную ссылку Instagram
    window.open('https://instagram.com/villogora_retreat', '_blank');
  };

  return (
    <footer className="bg-forest text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-amber mb-2">
              Виллогора Ретрит
            </h3>
            <p className="text-gray-300">
              Камерный ретрит в сердце Карелии
            </p>
          </div>

          {/* Social Media */}
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={handleInstagramClick}
              className="border-amber text-amber hover:bg-amber hover:text-forest"
            >
              📸 Instagram
            </Button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 mb-6"></div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>© 2025 Виллогора Ретрит. Все права защищены.</p>
            <p className="mt-2">
              Создано с ❤️ для тех, кто ищет гармонию с природой
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
