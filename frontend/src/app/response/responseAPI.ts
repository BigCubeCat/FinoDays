import axios from 'axios';
import {TUser} from '@/app/types.ts';

async function postPlan(user: TUser) {
  return await axios.post('http://localhost:5000/plan/', {
    user: user,
    plan: {
      sum: 1000000,
      duration: 1,
    },
  });
}

export async function buyLoan(id: number) {
  return await axios
    .post(`http://localhost:5000/plan/buy/${id}`)
    .then((resp) => resp.data);
}

export async function loadResult(user: TUser) {
  return await postPlan(user).then((resp) => resp.data);
}
