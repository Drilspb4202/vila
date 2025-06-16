"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { retreatData } from "@/data/retreat";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">
              {retreatData.about.title}
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {retreatData.about.description}
            </p>

            <div className="space-y-4">
              {retreatData.about.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-gray-700"
                >
                  <span className="mr-3 text-2xl">{benefit.split(' ')[0]}</span>
                  <span>{benefit.substring(benefit.indexOf(' ') + 1)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={retreatData.about.image}
                alt="Уютный дом в Карелии"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
