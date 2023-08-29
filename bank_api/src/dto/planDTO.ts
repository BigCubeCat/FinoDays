export type TPlanDTO = {
  id: number;
  title: string;
  type: TPlanTarget;
  sum: TSum;
  duration: number;
  rate: number;
  condition: {provision: string; user_score?: number};
};

export type TPlanTarget = 'another' | 'car' | 'estate' | 'business' | 'renovation' | 'education' | 'refinance' | 'traveling' | 'treatment';

export type TSum = {
  from: number;
  to: number;
};

export type TPlanRequestDTO = {
  sum: number;
  duration: number;
};
