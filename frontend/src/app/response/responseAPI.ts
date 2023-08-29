import axios from 'axios';
import {TLoan, TUser} from '@/app/types.ts';

async function postPlan(user: TUser, plan: TLoan) {
  return await axios.post('http://localhost:5000/plan/', {
    user,
    plan,
  });
}

export async function buyLoan(id: number) {
  return await axios
    .post(`http://localhost:5000/plan/buy/${id}`)
    .then((resp) => resp.data);
}

export async function loadResult(user: TUser, loan: TLoan) {
  return await postPlan(user, loan).then((resp) => resp.data);
}
