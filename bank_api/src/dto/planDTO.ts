export type TPlanDTO = {
  id: number;
  title: string;
  type: TPlanType;
  sum: TSum;
  duration: number;
  rate: number;
  condition: {provision: string; user_score: number};
};

export type TPlanType = 'mortgage' | 'credit' | 'car-loan';

export type TSum = {
  from: number;
  to: number;
};

export type TPlanRequestDTO = {
  sum: number;
  duration: number;
};