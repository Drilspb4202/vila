"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { retreatData } from "@/data/retreat";

export default function ProblemSolutionSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Узнаёшь себя?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Если хотя бы на 3 вопроса ты ответил &ldquo;да&rdquo; — этот ретрит для тебя
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {retreatData.about.painPoints.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-l-4 border-red-400 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4 mt-1">{problem.split(' ')[0]}</span>
                      <div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {problem.substring(problem.indexOf(' ') + 1)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Transformation Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-forest to-lake rounded-full mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-forest mb-2">
              Через 5 дней ты получишь
            </h3>
            <p className="text-gray-600">
              Научно доказанные изменения в твоей жизни
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {retreatData.about.transformation.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-l-4 border-green-400 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4 mt-1">{solution.split(' ')[0]}</span>
                      <div>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                          {solution.substring(solution.indexOf(' ') + 1)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-forest to-lake rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Готов изменить свою жизнь за 5 дней?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Осталось всего {retreatData.urgency.spotsLeft} места из {retreatData.urgency.totalSpots}
            </p>
            <Button 
              variant="amber" 
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-8 py-4 h-auto font-semibold"
            >
              Забронировать место сейчас
            </Button>
            <p className="text-sm mt-4 opacity-75">
              {retreatData.contact.urgencyMessage}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
