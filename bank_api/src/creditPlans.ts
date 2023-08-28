import {TPlanDTO} from './dto/planDTO';

export const plans: TPlanDTO[] = [
  {
    title: 'Первый ипотечный',
    type: 'mortgage',
    sum: {from: 1000000, to: 5000000},
    term: {unit: 'year', count: 30},
    rate: 7.5,
    condition: {
      provision: 'estate',
      user_score: 50,
    },
  },
  {
    title: 'Военная ипотека',
    type: 'mortgage',
    sum: {from: 100000, to: 150000000},
    term: {unit: 'year', count: 20},
    rate: 4.7,
    condition: {
      provision: 'none',
      user_score: 100,
    },
  },
  {
    title: 'Потребительский Express',
    type: 'credit',
    sum: {from: 50000, to: 300000},
    term: {unit: 'month', count: 24},
    rate: 12.0,
    condition: {
      provision: 'surely',
      user_score: 100,
    },
  },
  {
    title: 'Молодежное начало',
    type: 'credit',
    sum: {from: 10000, to: 100000},
    term: {unit: 'month', count: 12},
    rate: 9.8,
    condition: {
      provision: 'surely',
      user_score: 150,
    },
  },
  {
    title: 'Автофинансирование',
    type: 'car-loan',
    sum: {from: 200000, to: 2000000},
    term: {unit: 'month', count: 48},
    rate: 8.2,
    condition: {
      provision: 'transport',
      user_score: 80,
    },
  },
  {
    title: 'Рефинансирование',
    type: 'credit',
    sum: {from: 50000, to: 1500000},
    term: {unit: 'month', count: 60},
    rate: 6.5,
    condition: {
      provision: 'none',
      user_score: 110,
    },
  },
  {
    title: 'Бизнес-старт',
    type: 'credit',
    sum: {from: 500000, to: 10000000},
    term: {unit: 'year', count: 10},
    rate: 14.5,
    condition: {
      provision: 'surely',
      user_score: 160,
    },
  },
  {
    title: 'Образование Plus',
    type: 'credit',
    sum: {from: 20000, to: 500000},
    term: {unit: 'year', count: 36},
    rate: 10.7,
    condition: {
      provision: 'surely',
      user_score: 90,
    },
  },
  {
    title: 'Микрозайм Express',
    type: 'credit',
    sum: {from: 1000, to: 10000},
    term: {unit: 'day', count: 90},
    rate: 15.0,
    condition: {
      provision: 'none',
      user_score: 120,
    },
  },
  {
    title: 'Инвестиционное финансирование',
    type: 'credit',
    sum: {from: 100000, to: 1000000},
    term: {unit: 'month', count: 72},
    rate: 11.8,
    condition: {
      provision: 'property',
      user_score: 130,
    },
  },
  {
    title: 'Строительный кредит',
    type: 'credit',
    sum: {from: 300000, to: 10000000},
    term: {unit: 'year', count: 20},
    rate: 9.9,
    condition: {
      provision: 'estate',
      user_score: 180,
    },
  },
  {
    title: 'Туристический заем',
    type: 'credit',
    sum: {from: 5000, to: 50000},
    term: {unit: 'month', count: 12},
    rate: 13.2,
    condition: {
      provision: 'surely',
      user_score: 60,
    },
  },
  {
    title: 'Лечебный кредит',
    type: 'credit',
    sum: {from: 20000, to: 200000},
    term: {unit: 'month', count: 18},
    rate: 7.7,
    condition: {
      provision: 'none',
      user_score: 100,
    },
  },
  {
    title: 'Военный лечебный кредит',
    type: 'credit',
    sum: {from: 10000, to: 2000000},
    term: {unit: 'motnh', count: 36},
    rate: 3.7,
    condition: {
      provision: 'none',
      user_score: 100,
    },
  },
  {
    title: 'Свадебный кредит',
    type: 'credit',
    sum: {from: 10000, to: 100000},
    term: {unit: 'month', count: 24},
    rate: 10.5,
    condition: {
      provision: 'none',
      user_score: 120,
    },
  },
  {
    title: 'Сельскохозяйственный займ',
    type: 'credit',
    sum: {from: 100000, to: 3000000},
    term: {unit: 'year', count: 10},
    rate: 6.9,
    condition: {
      provision: 'property',
      user_score: 50,
    },
  },
  {
    title: 'Стартап-финансирование',
    type: 'credit',
    sum: {from: 500000, to: 10000000},
    term: {unit: 'year', count: 15},
    rate: 13.5,
    condition: {
      provision: 'surely',
      user_score: 180,
    },
  },
  {
    title: 'Кредитная линия для предприятий',
    type: 'credit',
    sum: {from: 1000000, to: 50000000},
    term: {unit: 'year', count: 10},
    rate: 9.0,
    condition: {
      provision: 'business',
      user_score: 100,
    },
  },
];
