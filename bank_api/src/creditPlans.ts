import { TPlanDTO } from "./dto/planDTO"

export const plans: TPlanDTO[] = [
    {
        "title": "Первый ипотечный",
        "type": "Ипотека",
        "sum": { "from": 1000000, "to": 5000000 },
        "term": { "unit": "месяц", "count": 360 },
        "rate": 7.5,
        "condition": {
            "provision": "Недвижимость",
            "user_score": 50
        }
    },
    {
        "title": "Военная ипотека",
        "type": "Ипотека",
        "sum": { "from": 100000, "to": 150000000 },
        "term": { "unit": "год", "count": 20 },
        "rate": 4.7,
        "condition": {
            "provision": "Нет",
            "user_score": 100
        }
    },
    {
        "title": "Потребительский Express",
        "type": "Потребительский",
        "sum": { "from": 50000, "to": 300000 },
        "term": { "unit": "месяц", "count": 24 },
        "rate": 12.0,
        "condition": {
            "provision": "Поручительство",
            "user_score": 100
        }
    },
    {
        "title": "Молодежное начало",
        "type": "Потребительский",
        "sum": { "from": 10000, "to": 100000 },
        "term": { "unit": "месяц", "count": 12 },
        "rate": 9.8,
        "condition": {
            "provision": "Поручительство",
            "user_score": 150
        }
    },
    {
        "title": "Автофинансирование",
        "type": "Автокредит",
        "sum": { "from": 200000, "to": 2000000 },
        "term": { "unit": "месяц", "count": 48 },
        "rate": 8.2,
        "condition": {
            "provision": "Автомобиль",
            "user_score": 80
        }
    },
    {
        "title": "Рефинансирование",
        "type": "Потребительский",
        "sum": { "from": 50000, "to": 1500000 },
        "term": { "unit": "месяц", "count": 60 },
        "rate": 6.5,
        "condition": {
            "provision": "Имущество",
            "user_score": 110
        }
    },
    {
        "title": "Бизнес-старт",
        "type": "Потребительский",
        "sum": { "from": 500000, "to": 10000000 },
        "term": { "unit": "год", "count": 10 },
        "rate": 14.5,
        "condition": {
            "provision": "Поручительство",
            "user_score": 160
        }
    },
    {
        "title": "Образование Plus",
        "type": "Потребительский",
        "sum": { "from": 20000, "to": 500000 },
        "term": { "unit": "год", "count": 36 },
        "rate": 10.7,
        "condition": {
            "provision": "Поручительство",
            "user_score": 90
        }
    },
    {
        "title": "Микрозайм Express",
        "type": "Потребительский",
        "sum": { "from": 1000, "to": 10000 },
        "term": { "unit": "день", "count": 90 },
        "rate": 15.0,
        "condition": {
            "provision": "Поручительство",
            "user_score": 120
        }
    },
    {
        "title": "Инвестиционное финансирование",
        "type": "Потребительский",
        "sum": { "from": 100000, "to": 1000000 },
        "term": { "unit": "месяц", "count": 72 },
        "rate": 11.8,
        "condition": {
            "provision": "Ценные бумаги",
            "user_score": 130
        }
    },
    {
        "title": "Строительный кредит",
        "type": "Потребительский",
        "sum": { "from": 300000, "to": 10000000 },
        "term": { "unit": "месяц", "count": 240 },
        "rate": 9.9,
        "condition": {
            "provision": "Недвижимость",
            "user_score": 180
        }
    },
    {
        "title": "Туристический заем",
        "type": "Потребительский",
        "sum": { "from": 5000, "to": 50000 },
        "term": { "unit": "месяц", "count": 12 },
        "rate": 13.2,
        "condition": {
            "provision": "Поручительство",
            "user_score": 60
        }
    },
    {
        "title": "Лечебный кредит",
        "type": "Потребительский",
        "sum": { "from": 20000, "to": 200000 },
        "term": { "unit": "месяц", "count": 18 },
        "rate": 7.7,
        "condition": {
            "provision": "Поручительство",
            "user_score": 100
        }
    },
    {
        "title": "Военный лечебный кредит",
        "type": "Потребительский",
        "sum": { "from": 10000, "to": 2000000 },
        "term": { "unit": "месяц", "count": 36 },
        "rate": 3.7,
        "condition": {
            "provision": "Нет",
            "user_score": 100
        }
    },
    {
        "title": "Свадебный кредит",
        "type": "Потребительский",
        "sum": { "from": 10000, "to": 100000 },
        "term": { "unit": "месяц", "count": 24 },
        "rate": 10.5,
        "condition": {
            "provision": "Поручительство",
            "user_score": 120
        }
    },
    {
        "title": "Сельскохозяйственный займ",
        "type": "Потребительский",
        "sum": { "from": 100000, "to": 3000000 },
        "term": { "unit": "месяц", "count": 120 },
        "rate": 6.9,
        "condition": {
            "provision": "Имущество",
            "user_score": 50
        }
    },
    {
        "title": "Стартап-финансирование",
        "type": "Потребительский",
        "sum": { "from": 500000, "to": 10000000 },
        "term": { "unit": "месяц", "count": 180 },
        "rate": 13.5,
        "condition": {
            "provision": "Поручительство",
            "user_score": 180
        }
    },
    {
        "title": "Кредитная линия для предприятий",
        "type": "Потребительский",
        "sum": { "from": 1000000, "to": 50000000 },
        "term": { "unit": "месяц", "count": 240 },
        "rate": 9.0,
        "condition": {
            "provision": "Бизнес",
            "user_score": 100
        }
    },
]
