export type TLoan = {
  amount: number | undefined;
  percent: number | undefined;
  payment: number | undefined;
  purpose: string;
};

export type TLoanRate = {
  id: string;
  product: TLoan;
  rate: number;
};
export type TProvisionVariant = 'car' | 'house' | 'land' | 'none';
