export type TLoan = {
  sum: number;
  duration: number;
  purpose?: string;
};

export type TUser = {
  name: string;
  age: number;
  count: number;
  income: number;
  consumption: number;
  experience: number;
  region: string;
  provision: string;
  phone: string;
  inn: string;
};

export type TResult = {
  id: number;
  title: string;
  type: string;
  sum: {from: number; to: number};
  duration: number;
  rate: number;
  condition: {
    provision: string;
    user_score: number;
  };
};
export type TProvisionVariant = 'car' | 'house' | 'land' | 'none';
