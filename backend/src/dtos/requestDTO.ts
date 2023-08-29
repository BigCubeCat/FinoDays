import {TSum} from './productDTO';
import {TUserDto} from './userDTO';

export type TApiRequestDTO = {
  user: TUserDto;
  plan: TPlanRequestDTO;
};

export type TPlanRequestDTO = {
  sum: TSum;
  duration: number;
};
