import {useAppDispatch, useAppSelector} from '@/app/hooks.ts';
import {selectUser, setUser} from '@/app/user/userSlice.ts';

export default function useUserForm() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser).user;
  console.log(user);
  const setNameHandler = (name: string) => {
    dispatch(setUser({...user, name: name}));
  };
  const setAgeHandler = (age: number) => {
    dispatch(setUser({...user, age: age}));
  };
  const setPhoneHandler = (phone: string) => {
    dispatch(setUser({...user, phone: phone}));
  };

  return {
    name: user.name,
    setName: setNameHandler,
    age: user.age,
    setAge: setAgeHandler,
    phone: user.phone,
    setPhone: setPhoneHandler,
  };
}
