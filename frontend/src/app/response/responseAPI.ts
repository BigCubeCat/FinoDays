import axios from 'axios';
import {TUser} from '@/app/types.ts';


async function responseAPI(user: TUser) {
  return await axios.post('http://localhost:5000/plan/', {
    user: user,
    plan: {
      sum: 1000000,
      duration: 1,
    },
  });
}

export async function loadResult(user: TUser) {
  return await responseAPI(user).then(resp => resp.data);
}