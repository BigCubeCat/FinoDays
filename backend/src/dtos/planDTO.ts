import {TSum} from './productDTO';

export type TPlanDTO = {
  title: string;
  type: TPlanType;
  sum: TSum;
  term: {unit: string; count: number};
  rate: number;
  condition: {provision: string; user_score: number};
};

export type TPlanType = 'Ипотека' | 'Потребительский' | 'Автокредит';

export type TPlanResponseDTO = {
  plans: TPlanDTO[];
};
