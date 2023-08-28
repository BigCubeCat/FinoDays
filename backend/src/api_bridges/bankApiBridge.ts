import {TPlanDTO} from '../dtos/planDTO';
import {getUserScore} from './scoreApiBridge';
import {TUserDto} from '../dtos/userDTO';
import {config} from '../config';
import {TPlanRequestDTO} from '../dtos/requestDTO';
import {fetchPost} from './utils';


async function getPlansFromApi(score: number, plan: TPlanRequestDTO): Promise<TPlanDTO[]> {
  const body = {
    score: score,
    plan: plan,
  };
  const address = `http://${config.api.host}:${config.api.port}/get/match`
  return (await fetchPost(address, body));
}

export async function getUserPlans(
  user: TUserDto,
  plan: TPlanRequestDTO,
): Promise<TPlanDTO[]> {
  try {
    const userScore = await getUserScore(user);
    return await getPlansFromApi(userScore, plan);
  } catch (error) {
    console.log('error = ', error);
    return [];
  }
}
