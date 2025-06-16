"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    question: "А если мне не поможет? Я уже пробовал разные методы...",
    answer: "Мы даём 100% гарантию возврата средств, если ты не почувствуешь изменения. За 2 года работы таких случаев было меньше 4%. Наша методика основана на научных исследованиях и проверена на 247 участниках."
  },
  {
    question: "Это не очередная 'волшебная таблетка'?",
    answer: "Нет, это серьёзная работа. Мы не обещаем мгновенных чудес. Но за 5 дней интенсивной работы с проверенными техниками 96% участников чувствуют значительные изменения. Это подтверждают независимые исследования."
  },
  {
    question: "У меня нет времени на 5 дней...",
    answer: "Сколько времени ты уже тратишь на борьбу с усталостью, стрессом и выгоранием? Месяцы? Годы? 5 дней инвестиций в себя сэкономят тебе годы страданий. У нас есть пакет выходного дня для самых занятых."
  },
  {
    question: "Это дорого для меня...",
    answer: "Одна сессия психотерапии в Москве стоит 5000₽. За цену 12 сессий ты получаешь полную трансформацию жизни + 3 месяца поддержки. Плюс можно оплачивать частями. Сколько стоит твоё здоровье и счастье?"
  },
  {
    question: "А вдруг это секта или что-то подозрительное?",
    answer: "Мы работаем официально, есть все документы. Наши методы основаны на научных исследованиях, а не на эзотерике. У нас более 200 отзывов с фото и контактами реальных людей. Можешь связаться с любым участником."
  },
  {
    question: "Я интроверт, мне сложно в группах...",
    answer: "Группы максимум 5 человек, очень камерно. Много индивидуальной работы. 30% наших участников — интроверты, и они чувствуют себя комфортно. Можем организовать индивидуальную программу."
  },
  {
    question: "А если я не смогу приехать из-за обстоятельств?",
    answer: "Мы переносим участие на любую удобную дату в течение года без доплат. Если совсем не получается — возвращаем 100% предоплаты за 7 дней до начала."
  },
  {
    question: "Как я пойму, что это работает?",
    answer: "Изменения заметны уже на 2-3 день: улучшается сон, появляется энергия, проясняются мысли. Мы делаем замеры до и после программы. Плюс 3 месяца поддержки для закрепления результата."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Честные ответы на твои сомнения
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы знаем, что у тебя есть вопросы. Вот самые частые из них
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-forest pr-4">
                        {faq.question}
                      </h3>
                      <div className={`transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-forest mb-4">
              Остались вопросы?
            </h3>
            <p className="text-gray-600 mb-6">
              Напиши нам в Telegram или позвони. Мы ответим на все твои вопросы лично.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8-952-201-07-78"
                className="inline-flex items-center justify-center px-6 py-3 bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors duration-200"
              >
                📞 Позвонить сейчас
              </a>
              <a
                href="https://t.me/villogora_retreat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                💬 Написать в Telegram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
