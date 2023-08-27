export type TProvision = 'none' | 'car' | 'house' | 'land';

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