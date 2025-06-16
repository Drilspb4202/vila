"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { retreatData } from "@/data/retreat";

export default function PackagesSection() {
  const handleBooking = (packageId: string) => {
    const phone = retreatData.contact.phone;
    const message = `Здравствуйте! Хочу забронировать пакет "${retreatData.packages.find(p => p.id === packageId)?.duration}" на ретрит в Карелии.`;
    window.open(`tel:${phone}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-forest/5 to-lake/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Инвестируй в новую версию себя
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Сколько стоит твоё здоровье, энергия и счастье? Цена одного похода к психологу в Москве — 5000₽.
            За эти деньги ты получишь полную трансформацию жизни.
          </p>
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-700 font-semibold">
              ⚠️ Внимание! {retreatData.urgency.priceIncrease}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {retreatData.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Badges */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-2">
                {pkg.popular && (
                  <span className="bg-amber text-forest px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🔥 Хит продаж
                  </span>
                )}
                {pkg.bestValue && (
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    💎 Лучшая цена
                  </span>
                )}
                {pkg.discount && (
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {pkg.discount}
                  </span>
                )}
              </div>

              <Card className={`h-full ${pkg.popular ? 'ring-2 ring-amber shadow-xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all duration-300 ${pkg.bestValue ? 'ring-2 ring-green-500' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-forest mb-2">
                    {pkg.duration}
                  </CardTitle>

                  {/* Price Section */}
                  <div className="space-y-2">
                    {pkg.originalPrice && (
                      <div className="text-lg text-gray-400 line-through">
                        {pkg.originalPrice}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-lake">
                      {pkg.price}
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-green-600 font-semibold">
                        Экономия {parseInt(pkg.originalPrice.replace(/\D/g, '')) - parseInt(pkg.price.replace(/\D/g, ''))} ₽
                      </div>
                    )}
                  </div>

                  {/* Urgency */}
                  {pkg.urgency && (
                    <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                      ⏰ {pkg.urgency}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1 text-sm">✓</span>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Testimonial */}
                  {pkg.testimonial && (
                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                      <p className="text-xs italic text-gray-600 mb-1">
                        "                        &ldquo;{pkg.testimonial.text}&rdquo;"
                      </p>
                      <p className="text-xs font-semibold text-gray-700">
                        — {pkg.testimonial.author}
                      </p>
                    </div>
                  )}

                  <Button
                    variant={pkg.popular ? "amber" : pkg.bestValue ? "default" : "forest"}
                    className="w-full font-semibold"
                    onClick={() => handleBooking(pkg.id)}
                  >
                    {pkg.popular ? "Забронировать хит" : "Забронировать"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bonuses Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-amber/10 to-forest/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-forest text-center mb-6">
            🎁 Бонусы при бронировании сегодня
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {retreatData.contact.bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-2xl mb-2">{bonus.split(' ')[0]}</div>
                <p className="text-gray-700 font-medium">
                  {bonus.substring(bonus.indexOf(' ') + 1)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-forest mb-2">
              {retreatData.contact.prepayment}
            </p>
            <p className="text-gray-600 mb-4">
              Количество мест ограничено: <span className="font-semibold text-forest">{retreatData.contact.maxGuests}</span>
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 font-semibold text-sm">
                {retreatData.contact.urgencyMessage}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
