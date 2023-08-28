import {TUserDto} from '../dtos/userDTO';
import {config} from '../config';
import {fetchPost} from './utils';

/**
 * Retrieves the user score from the scoring API.
 *
 * @param {TUserDto} user - The user object containing the necessary data for scoring.
 * @return {Promise<number>} A promise that resolves to the user's score.
 */
export const getUserScore = async (user: TUserDto): Promise<number> => {
  const address = `http://${config.scoring.host}:${config.scoring.port}/`;
  const response = await fetchPost(address, user);
  return response?.score | Infinity;
};
