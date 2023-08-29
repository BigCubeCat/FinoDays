import { TLoanTarget } from "./userDTO";

export type TPlanDTO = {
    id: number;
    title: string;
    type: TLoanTarget;
    sum: TSum;
    duration: number;
    rate: number;
    condition: { provision: string, user_score: number };
};

export type TSum = {
    from: number;
    to: number;
};
