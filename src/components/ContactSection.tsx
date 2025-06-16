"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { retreatData } from "@/data/retreat";

export default function ContactSection() {
  const handlePhoneCall = () => {
    window.open(`tel:${retreatData.contact.phone}`, '_blank');
  };

  const handleTelegramClick = () => {
    window.open(retreatData.contact.telegram, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-lake/10 to-forest/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Последний шаг к новой жизни
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Не откладывай на завтра то, что может изменить твою жизнь уже сегодня.
            Каждый день промедления — это день без энергии, радости и внутреннего покоя.
          </p>
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-700 font-semibold">
              ⏰ Внимание! Следующий набор только через 3 месяца. Не упусти свой шанс!
            </p>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Urgency Message */}
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl text-center">
                    <h3 className="text-xl font-bold mb-2">
                      🔥 Действуй сейчас!
                    </h3>
                    <p className="text-lg">
                      Осталось всего 3 места из 5
                    </p>
                    <p className="text-sm opacity-90 mt-2">
                      Следующий набор только через 3 месяца
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-forest mb-3">
                        Позвонить сейчас
                      </h4>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handlePhoneCall}
                        className="w-full text-lg font-semibold text-lake border-lake hover:bg-lake hover:text-white"
                      >
                        📞 {retreatData.contact.phone}
                      </Button>
                      <p className="text-sm text-gray-600 mt-2">
                        Ответим на все вопросы
                      </p>
                    </div>

                    {/* Telegram */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-forest mb-3">
                        Написать в Telegram
                      </h4>
                      <Button
                        variant="forest"
                        size="lg"
                        onClick={handleTelegramClick}
                        className="w-full text-lg"
                      >
                        💬 Telegram-чат
                      </Button>
                      <p className="text-sm text-gray-600 mt-2">
                        Быстрое бронирование
                      </p>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-forest mb-4 text-center">
                      💳 Условия бронирования
                    </h4>
                    <div className="space-y-3 text-center">
                      <p className="text-gray-700">
                        <span className="font-semibold text-forest">{retreatData.contact.prepayment}</span>
                        <br />
                        <span className="text-sm text-gray-600">Остальную сумму доплачиваешь на месте</span>
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-forest">Возврат 100%</span>
                        <br />
                        <span className="text-sm text-gray-600">Если отменишь за 7 дней</span>
                      </p>
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div className="bg-gradient-to-r from-amber to-orange-400 text-white p-6 rounded-xl text-center">
                    <h4 className="text-xl font-bold mb-2">
                      🎯 Твоя новая жизнь начинается сегодня
                    </h4>
                    <p className="mb-4">
                      Не жди понедельника, нового года или &ldquo;подходящего момента&rdquo;
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handlePhoneCall}
                        className="bg-white text-orange-600 border-white hover:bg-gray-100 font-semibold"
                      >
                        📞 Позвонить
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleTelegramClick}
                        className="bg-white text-orange-600 border-white hover:bg-gray-100 font-semibold"
                      >
                        💬 Telegram
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
