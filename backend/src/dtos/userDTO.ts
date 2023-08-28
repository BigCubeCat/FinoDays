export type TUserDto = {
  name: string;
  experience: number;
  finance: {
    count: number;
    income: number;
    consumption: number;
    percent: number;
  };
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
