import {TProductDto, TSum} from './productDTO';
import {TUserDto} from './userDTO';

// TODO: Удалить
export type TRequestDto = {
  product: TProductDto;
  user: TUserDto;
};

export type TApiRequestDTO = {
  user: TUserDto,
  plan: TPlanRequestDTO,
}

export type TPlanRequestDTO = {
  sum: TSum,
  term: {unit: string; count: number},
}