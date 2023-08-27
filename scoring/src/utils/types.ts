export type TProvision = 'Нет' | 'Поручительство' | 'Автомобиль' | 'Недвижимость' | 'Бизнес' | 'Имущество';

export type UserDto = {
  name: string;
  experience: number;
  count: number;
  income: number;
  consumption: number;
  age: number;
  phone: string;
  provision: TProvision;
}