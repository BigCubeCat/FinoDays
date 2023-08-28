export type TPlanDTO = {
    title: string,
    type: TPlanType,
    sum: TSum,
    term: { unit: string, count: number },
    rate: number,
    condition: { provision: string, user_score: number }
}

export type TPlanType = 'mortgage' | 'credit' | 'car-loan';

export type TSum = {
    from: number;
    to: number;
};

export type TPlanRequestDTO = {
    sum: TSum,
    term: { unit: string; count: number },
}