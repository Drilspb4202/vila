export interface RetreatPackage {
  id: string;
  duration: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  features: string[];
  popular?: boolean;
  bestValue?: boolean;
  urgency?: string;
  testimonial?: {
    text: string;
    author: string;
  };
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
}

export const retreatData = {
  hero: {
    title: "Последние 3 места на эксклюзивный ретрит в Карелии",
    subtitle: "Трансформация за 5 дней: от выгорания к внутренней силе",
    urgency: "Осталось мест: 3 из 5",
    backgroundImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop",
    cta: "Забронировать последнее место",
    guarantee: "100% возврат средств, если не почувствуешь изменения"
  },

  about: {
    title: "Что, если через 5 дней ты станешь совершенно другим человеком?",
    subtitle: "Представь: ты просыпаешься с энергией, которой не было месяцами",
    description: "Ты помнишь, когда в последний раз чувствовал себя по-настоящему живым? Когда твои мысли были ясными, а сердце — спокойным? Наш ретрит — это не просто отдых. Это научно обоснованная система перезагрузки, которая за 5 дней вернёт тебе себя настоящего.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
    painPoints: [
      "😴 Просыпаешься уставшим, даже после 8 часов сна?",
      "🧠 Мысли крутятся по кругу, а решения не приходят?",
      "💔 Чувствуешь пустоту там, где раньше была радость?",
      "⚡ Энергии хватает только на работу, а на себя — ничего не остается?"
    ],
    transformation: [
      "🌅 Глубокий восстанавливающий сон без будильника",
      "🧘 Ясность ума и способность принимать решения",
      "❤️ Возвращение радости от простых вещей",
      "⚡ Энергия, которая бьёт ключом весь день",
      "🎯 Четкое понимание своих целей и приоритетов"
    ]
  },

  features: [
    {
      id: "nervous_system",
      title: "Перезагрузка нервной системы",
      description: "Научно доказанные техники восстановления после стресса и выгорания",
      icon: "🧠",
      benefit: "Снижение кортизола на 40% уже за 3 дня"
    },
    {
      id: "digital_detox",
      title: "Цифровой детокс",
      description: "Полное отключение от соцсетей и уведомлений. Возвращение к себе",
      icon: "📱",
      benefit: "Улучшение концентрации в 3 раза"
    },
    {
      id: "sleep_optimization",
      title: "Восстановление сна",
      description: "Авторская методика возвращения естественных циркадных ритмов",
      icon: "😴",
      benefit: "Глубокий сон без пробуждений"
    },
    {
      id: "energy_boost",
      title: "Энергетическая перезагрузка",
      description: "Комплекс практик для восстановления жизненной энергии",
      icon: "⚡",
      benefit: "Энергия на весь день без кофе"
    },
    {
      id: "emotional_healing",
      title: "Эмоциональное исцеление",
      description: "Работа с подавленными эмоциями и внутренними блоками",
      icon: "💚",
      benefit: "Возвращение радости жизни"
    },
    {
      id: "clarity",
      title: "Ясность целей",
      description: "Понимание своих истинных желаний и жизненного направления",
      icon: "🎯",
      benefit: "Четкий план на следующий год"
    }
  ] as Feature[],

  testimonials: [
    {
      id: "anna",
      text: "Я приехала на грани нервного срыва. Через 5 дней я была другим человеком. Впервые за 2 года проспала всю ночь без пробуждений. Энергии хватает на всё, а главное — я снова чувствую радость.",
      author: "Анна Петрова",
      location: "Москва, маркетолог",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&crop=face",
      rating: 5
    },
    {
      id: "dmitry",
      text: "Думал, что выгорание — это навсегда. Ретрит показал, что можно восстановиться полностью. Теперь работаю в 2 раза эффективнее, но при этом не устаю. Жена говорит, что я стал совсем другим.",
      author: "Дмитрий Козлов",
      location: "СПб, IT-директор",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&crop=face",
      rating: 5
    },
    {
      id: "elena",
      text: "Скептически отнеслась к обещаниям трансформации. Но результат превзошёл ожидания. Депрессия, которая мучила 6 месяцев, просто исчезла. Чувствую себя как в 25 лет.",
      author: "Елена Смирнова",
      location: "Екатеринбург, врач",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&crop=face",
      rating: 5
    }
  ] as Testimonial[],

  packages: [
    {
      id: "weekend",
      duration: "Выходные (2 дня)",
      price: "29 000 ₽",
      originalPrice: "35 000 ₽",
      discount: "Скидка 6000₽",
      features: [
        "Экспресс-диагностика выгорания",
        "Базовые техники восстановления",
        "Цифровой детокс",
        "Восстановительный сон",
        "Питание для энергии"
      ],
      urgency: "Только до конца месяца"
    },
    {
      id: "transformation",
      duration: "Трансформация (5 дней)",
      price: "59 000 ₽",
      originalPrice: "75 000 ₽",
      discount: "Экономия 16000₽",
      features: [
        "Полная перезагрузка нервной системы",
        "Восстановление энергетических ресурсов",
        "Работа с эмоциональными блоками",
        "Индивидуальный план развития",
        "3 месяца поддержки после ретрита",
        "Гарантия результата"
      ],
      popular: true,
      testimonial: {
        text: "За 5 дней я стала другим человеком. Энергии хватает на всё!",
        author: "Анна, 34 года"
      }
    },
    {
      id: "deep_healing",
      duration: "Глубокое исцеление (7 дней)",
      price: "89 000 ₽",
      originalPrice: "110 000 ₽",
      features: [
        "Всё из пакета 'Трансформация'",
        "Работа с травмами и глубокими блоками",
        "Персональные сессии с психологом",
        "Авторские техники исцеления",
        "6 месяцев персональной поддержки",
        "Доступ к закрытому сообществу"
      ],
      bestValue: true
    },
    {
      id: "life_reset",
      duration: "Перезагрузка жизни (10 дней)",
      price: "129 000 ₽",
      originalPrice: "160 000 ₽",
      features: [
        "Всё из пакета 'Глубокое исцеление'",
        "Создание нового жизненного плана",
        "Работа с целями и мечтами",
        "Бизнес-коучинг (по желанию)",
        "Год персональной поддержки",
        "VIP-доступ ко всем будущим программам"
      ],
      urgency: "Осталось 1 место"
    }
  ] as RetreatPackage[],

  gallery: [
    {
      id: "forest1",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
      alt: "Карельский лес",
      width: 800,
      height: 600
    },
    {
      id: "lake1", 
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
      alt: "Озеро в Карелии",
      width: 800,
      height: 600
    },
    {
      id: "house1",
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
      alt: "Уютный дом",
      width: 800,
      height: 600
    },
    {
      id: "sauna1",
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop",
      alt: "Баня",
      width: 800,
      height: 600
    },
    {
      id: "nature1",
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop",
      alt: "Природа Карелии",
      width: 800,
      height: 600
    },
    {
      id: "food1",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
      alt: "Домашняя кухня",
      width: 800,
      height: 600
    }
  ] as GalleryImage[],

  urgency: {
    spotsLeft: 3,
    totalSpots: 5,
    nextRetreat: "через 3 месяца",
    priceIncrease: "цены вырастут на 30% с 1 февраля"
  },

  guarantees: [
    "💰 100% возврат средств, если не почувствуешь изменения",
    "🔄 Бесплатное повторное участие, если результат не устроит",
    "📞 3 месяца персональной поддержки включены",
    "🏆 Более 200 успешных трансформаций за 2 года"
  ],

  socialProof: {
    participantsCount: 247,
    averageRating: 4.9,
    transformationRate: 96,
    returnRate: 23
  },

  contact: {
    phone: "8-952-201-07-78",
    telegram: "https://t.me/villogora_retreat",
    prepayment: "Предоплата всего 15 000 ₽",
    maxGuests: "до 5 человек",
    urgencyMessage: "⚡ Последние 3 места! Следующий набор только через 3 месяца",
    bonuses: [
      "🎁 Персональный план питания на 3 месяца",
      "📱 Доступ к мобильному приложению с медитациями",
      "📚 Электронная книга 'Жизнь без выгорания'"
    ]
  }
};
