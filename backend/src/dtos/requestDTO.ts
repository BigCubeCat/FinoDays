import { TUserDto } from '../dtos_v2/userDTO';
import {TSum} from './productDTO';

export type TApiRequestDTO = {
  user: TUserDto;
  plan: TPlanRequestDTO;
};

export type TPlanRequestDTO = {
  sum: TSum;
  duration: number;
};
