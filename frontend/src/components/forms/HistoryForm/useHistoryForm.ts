import {useState} from 'react';

import {useAppSelector} from '@/app/hooks.ts';
import {selectUser} from '@/app/user/userSlice.ts';
import {TProvisionVariant} from '@/app/types.ts';

export default function useHistoryForm() {
  const user = useAppSelector(selectUser);

  const [count, setCount] = useState<number>(user.count);
  const [income, setIncome] = useState(user.income);
  const [consumption, setConsumption] = useState(user.consumption);
  const [employer, setEmployer] = useState('');
  const [experience, setExperience] = useState(user.experience);

  const [provision, setProvision] = useState<TProvisionVariant>(user.provision);

  const [otherProducts, setOtherProducts] = useState<boolean[]>([false, true, false]);

  return {
    count, setCount,
    income, setIncome,
    consumption, setConsumption,
    employer, setEmployer,
    otherProducts, setOtherProducts,
    provision, setProvision,
    experience, setExperience
  };
}
