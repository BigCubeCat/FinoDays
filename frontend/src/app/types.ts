export type TLoan = {
  amount: number | undefined;
  percent: number | undefined;
  payment: number | undefined;
  purpose: string;
};

export type TResult = {
  id: number;
  title: string;
  type: string;
  sum: {from: number, to: number};
  duration: number;
  rate: number;
  condition: {
    provision: string;
    user_score: number;
  }
};
export type TProvisionVariant = 'car' | 'house' | 'land' | 'none';
