import {TProductDto} from './productDTO';
import {TUserDto} from './userDTO';

export type TRequestDto = {
  product: TProductDto;
  user: TUserDto;
};
