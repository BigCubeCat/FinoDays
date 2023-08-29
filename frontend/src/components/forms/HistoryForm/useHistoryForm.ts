import {useState} from 'react';

import {useAppDispatch, useAppSelector} from '@/app/hooks.ts';
import {
  selectUser,
  setConsumption,
  setCount,
  setExp,
  setIncome,
  setInn,
  setProvision,
} from '@/app/user/userSlice.ts';

export default function useHistoryForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser).user;


  const [otherProducts, setOtherProducts] = useState<boolean[]>([
    false,
    true,
    false,
  ]);

  return {
    count: user.count,
    setCount: (count: number) => dispatch(setCount(count)),
    income: user.income,
    setIncome: (income: number) => dispatch(setIncome(income)),
    consumption: user.consumption,
    setConsumption: (consumption: number) => dispatch(setConsumption(consumption)),
    employer: user.inn,
    setEmployer: (inn: string) => dispatch(setInn(inn)),

    provision: user.provision,
    setProvision: (prov: string) => dispatch(setProvision(prov)),
    experience: user.experience,
    setExperience: (exp: number) => dispatch(setExp(exp)),
    otherProducts,
    setOtherProducts,
  };
}
