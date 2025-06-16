"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { retreatData } from "@/data/retreat";

export default function FeaturesSection() {
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
            Научно доказанные методы восстановления
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Каждая техника основана на исследованиях в области нейропластичности и психологии восстановления
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreatData.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-forest mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold">
                    ✓ {feature.benefit}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
