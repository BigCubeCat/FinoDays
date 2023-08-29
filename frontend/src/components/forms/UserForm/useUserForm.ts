import {useState} from 'react';

import {useAppSelector} from '@/app/hooks.ts';
import {selectUser} from '@/app/user/userSlice.ts';

export default function useUserForm() {
  const user = useAppSelector(selectUser);

  const [name, setName] = useState<string>(user.name);
  const [age, setAge] = useState(user.age);

  const [phone, setPhone] = useState(user.phone);

  const saveData = () => {
  };

  return {
    name,
    setName,
    age,
    setAge,
    phone,
    setPhone,
    saveData,
  };
}
