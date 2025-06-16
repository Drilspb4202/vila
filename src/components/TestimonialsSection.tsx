"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { retreatData } from "@/data/retreat";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber/5 to-forest/5">
      <div className="container mx-auto px-4">
        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">
                {retreatData.socialProof.participantsCount}+
              </div>
              <div className="text-gray-600">Участников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">
                {retreatData.socialProof.averageRating}
              </div>
              <div className="text-gray-600">Средняя оценка</div>
              <div className="text-amber text-lg">★★★★★</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">
                {retreatData.socialProof.transformationRate}%
              </div>
              <div className="text-gray-600">Почувствовали изменения</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-forest mb-2">
                {retreatData.socialProof.returnRate}%
              </div>
              <div className="text-gray-600">Возвращаются снова</div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Истории трансформации
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные отзывы людей, которые изменили свою жизнь за несколько дней
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retreatData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber text-lg">★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "                    &ldquo;{testimonial.text}&rdquo;"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-forest">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-forest text-center mb-8">
            Наши гарантии
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {retreatData.guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-white rounded-lg shadow-md"
              >
                <span className="text-2xl mr-4">{guarantee.split(' ')[0]}</span>
                <span className="text-gray-700">{guarantee.substring(guarantee.indexOf(' ') + 1)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
