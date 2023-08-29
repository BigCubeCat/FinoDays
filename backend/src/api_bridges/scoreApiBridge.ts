import {TUser} from '../dtos_v2/userDTO';
import {config} from '../config';
import {fetchPost} from './utils';

/**
 * Retrieves the user score from the scoring API.
 *
 * @param {TUserDto} user - The user object containing the necessary data for scoring.
 * @return {Promise<number>} A promise that resolves to the user's score. On error, return Infinity
 */
export const getUserScore = async (user: TUser): Promise<number> => {
  try {
    const response = await fetchPost(config.scoring_address, user);
    console.log("resp = ", response);
    return response?.score | Infinity;
  } catch (e) {
    console.error(e);
    return Infinity;
  }
};
