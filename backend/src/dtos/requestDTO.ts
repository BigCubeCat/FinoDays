import { TUser } from '../dtos_v2/userDTO';
import {TSum} from './productDTO';

export type TApiRequestDTO = {
  user: TUser;
  plan: TPlanRequestDTO;
};

export type TPlanRequestDTO = {
  sum: TSum;
  duration: number;
};
