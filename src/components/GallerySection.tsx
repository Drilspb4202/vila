"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { retreatData } from "@/data/retreat";

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Атмосфера ретрита
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Почувствуй себя частью этой удивительной природы
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retreatData.gallery.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`relative ${
                index === 0 ? 'h-96 md:h-full' : 'h-64'
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 italic">
            "Здесь время течёт по-другому, а душа находит покой"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
