export type TUser = {
  name: string;
  experience: number;
  count: number;
  percent: number;
  age: number;
  phone: string;
  provision: TProvision;
};

export type TProvision =
  | 'none'
  | 'surely'
  | 'transport'
  | 'estate'
  | 'business'
  | 'property';
