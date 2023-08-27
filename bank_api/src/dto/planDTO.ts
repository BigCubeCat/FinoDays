export type TPlanDTO = {
    title: string,
    type: TPlanType,
    sum: { from: number, to: number },
    term: { unit: string, count: number },
    rate: number,
    condition: { provision: string, user_score: number }
}

export type TPlanType = "Ипотека" | "Потребительский" | "Автокредит"
