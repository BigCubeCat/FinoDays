import {useState} from 'react';

import {useAppDispatch, useAppSelector} from '@/app/hooks.ts';
import {selectUser, setUser} from '@/app/user/userSlice.ts';
import {TProvisionVariant} from '@/app/types.ts';

export default function useUserForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [name, setName] = useState<string>(user.name);
  const [count, setCount] = useState<number>(user.count);
  const [age, setAge] = useState(user.age);
  const [experience, setExperience] = useState(user.experience);
  const [provision, setProvision] = useState<TProvisionVariant>(user.provision);

  const [income, setIncome] = useState(user.income);
  const [consumption, setConsumption] = useState(user.consumption);
  const [phone, setPhone] = useState(user.phone);

  const saveData = () => {
    dispatch(
      setUser({
        name,
        count,
        age,
        experience,
        income,
        consumption,
        phone,
        provision,
      }),
    );
  };

  return {
    name,
    setName,
    count,
    setCount,
    age,
    setAge,
    experience,
    setExperience,
    provision,
    setProvision,
    income,
    setIncome,
    consumption,
    setConsumption,
    phone,
    setPhone,
    saveData,
  };
}
