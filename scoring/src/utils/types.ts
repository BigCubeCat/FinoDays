export type TUser = {
  name: string;
  finance: {
    count: number;
    income: number;
    consumption: number;
    percent: number;
    experience: number;
  };
  age: number;
  phone: string;
  familyStatus: TFamilyStatus;
  pbsProduct: TProductDto;
  inn: string;
  region: string;
  target: TLoanTarget;
}

export type TFamilyStatus = 'single' | 'married';
export type TLoanTarget = 'another' | 'car' | 'estate' | 'business' | 'renovation' | 'education' | 'refinance' | 'traveling' | 'treatment';
export type TProductDto = 'salary_card' | 'credit_card' | 'deposite'