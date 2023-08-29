export type TUser = {
    name: string;
    finance: {
      count: number;
      income: number;
      consumption: number;
      experience: number;
    };
    age: number;
    phone: string;
    familyStatus: TFamilyStatus;
    pbsProduct: TProductDto;
    inn: string;
    region: string;
    target: TLoanTarget;
    provision: TProvision;
  }
  
  export type TFamilyStatus = 'single' | 'married';
  export type TLoanTarget = 'another' | 'car' | 'estate' | 'business' | 'renovation' | 'education' | 'refinance' | 'traveling' | 'treatment';
  export type TProductDto = 'salary_card' | 'credit_card' | 'deposite'
  export type TProvision = 'none' | 'flat' | 'house' | 'land' | 'car';