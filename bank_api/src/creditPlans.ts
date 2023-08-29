import {TPlanDTO} from './dto/planDTO';

export const plans: TPlanDTO[] = [
  {
    id: 0,
    title: 'Первый ипотечный',
    type: 'mortgage',
    sum: {from: 1000000, to: 5000000},
    duration: 30,
    rate: 7.5,
    condition: {
      provision: 'estate',
      user_score: 50,
    },
  },
  {
    id: 1,
    title: 'Военная ипотека',
    type: 'mortgage',
    sum: {from: 100000, to: 150000000},
    duration: 20,
    rate: 4.7,
    condition: {
      provision: 'none',
      user_score: 100,
    },
  },
  {
    id: 2,
    title: 'Потребительский Express',
    type: 'credit',
    sum: {from: 50000, to: 300000},
    duration: 24,
    rate: 12.0,
    condition: {
      provision: 'surely',
      user_score: 100,
    },
  },
  {
    id: 3,
    title: 'Молодежное начало',
    type: 'credit',
    sum: {from: 10000, to: 100000},
    duration: 2,
    rate: 9.8,
    condition: {
      provision: 'surely',
      user_score: 150,
    },
  },
  {
    id: 4,
    title: 'Автофинансирование',
    type: 'car-loan',
    sum: {from: 200000, to: 2000000},
    duration: 5,
    rate: 8.2,
    condition: {
      provision: 'transport',
      user_score: 80,
    },
  },
  {
    id: 5,
    title: 'Рефинансирование',
    type: 'credit',
    sum: {from: 50000, to: 1500000},
    duration: 8,
    rate: 6.5,
    condition: {
      provision: 'none',
      user_score: 110,
    },
  },
  {
    id: 6,
    title: 'Бизнес-старт',
    type: 'credit',
    sum: {from: 500000, to: 10000000},
    duration: 90,
    rate: 14.5,
    condition: {
      provision: 'surely',
      user_score: 160,
    },
  },
  {
    id: 7,
    title: 'Образование Plus',
    type: 'credit',
    sum: {from: 20000, to: 500000},
    duration: 9,
    rate: 10.7,
    condition: {
      provision: 'surely',
      user_score: 90,
    },
  },
  {
    id: 8,
    title: 'Микрозайм Express',
    type: 'credit',
    sum: {from: 1000, to: 10000},
    duration: 9,
    rate: 15.0,
    condition: {
      provision: 'none',
      user_score: 120,
    },
  },
  {
    id: 9,
    title: 'Инвестиционное финансирование',
    type: 'credit',
    sum: {from: 100000, to: 1000000},
    duration: 1,
    rate: 11.8,
    condition: {
      provision: 'property',
      user_score: 130,
    },
  },
  {
    id: 10,
    title: 'Строительный кредит',
    type: 'credit',
    sum: {from: 300000, to: 10000000},
    duration: 10,
    rate: 9.9,
    condition: {
      provision: 'estate',
      user_score: 180,
    },
  },
  {
    id: 11,
    title: 'Туристический заем',
    type: 'credit',
    sum: {from: 5000, to: 50000},
    duration: 3,
    rate: 13.2,
    condition: {
      provision: 'surely',
      user_score: 60,
    },
  },
  {
    id: 12,
    title: 'Лечебный кредит',
    type: 'credit',
    sum: {from: 20000, to: 200000},
    duration: 5,
    rate: 7.7,
    condition: {
      provision: 'none',
      user_score: 100,
    },
  },
  {
    id: 13,
    title: 'Военный лечебный кредит',
    type: 'credit',
    sum: {from: 10000, to: 2000000},
    duration: 7,
    rate: 3.7,
    condition: {
      provision: 'none',
      user_score: 100,
    },
  },
  {
    id: 14,
    title: 'Свадебный кредит',
    type: 'credit',
    sum: {from: 10000, to: 100000},
    duration: 3,
    rate: 10.5,
    condition: {
      provision: 'none',
      user_score: 120,
    },
  },
  {
    id: 15,
    title: 'Сельскохозяйственный займ',
    type: 'credit',
    sum: {from: 100000, to: 3000000},
    duration: 6,
    rate: 6.9,
    condition: {
      provision: 'property',
      user_score: 50,
    },
  },
  {
    id: 16,
    title: 'Стартап-финансирование',
    type: 'credit',
    sum: {from: 500000, to: 10000000},
    duration: 16,
    rate: 13.5,
    condition: {
      provision: 'surely',
      user_score: 180,
    },
  },
  {
    id: 17,
    title: 'Кредитная линия для предприятий',
    type: 'credit',
    sum: {from: 1000000, to: 50000000},
    duration: 200,
    rate: 9.0,
    condition: {
      provision: 'business',
      user_score: 100,
    },
  },
];