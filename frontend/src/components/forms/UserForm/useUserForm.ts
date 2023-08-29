import {useAppDispatch, useAppSelector} from '@/app/hooks.ts';
import {selectUser, setAge, setName, setPhone} from '@/app/user/userSlice.ts';

export default function useUserForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser).user;

  return {
    name: user.name,
    setName: (name: string) => dispatch(setName(name)),
    age: user.age,
    setAge: (age: number) => dispatch(setAge(age)),
    phone: user.phone,
    setPhone: (phone: string) => dispatch(setPhone(phone)),
  };
}
