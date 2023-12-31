import {TSum} from './productDTO';

export type TPlanDTO = {
  id: number;
  title: string;
  type: TPlanType;
  sum: TSum;
  term: {unit: string; count: number};
  rate: number;
  condition: {provision: string; user_score: number};
};

export type TPlanType = 'mortgage' | 'credit' | 'car-loan';

export type TPlanResponseDTO = {
  plans: TPlanDTO[];
};
