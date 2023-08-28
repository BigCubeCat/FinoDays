export type TUserDto = {
  name: string;
  experience: number;
  count: number;
  income: number;
  consumption: number;
  age: number;
  phone: string;
  provision: TProvision;
};

export type TProvision = 'none' | 'surely' | 'transport' | 'estate' | 'business' | 'property';
