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
  return (await fetchPost(config.api_address, body));
}

export async function getPlans(
  user: TUserDto | undefined,
  plan: TPlanRequestDTO,
): Promise<TPlanDTO[]> {
  try {
    let userScore = Infinity; // Если нет пользователь не задан, выдаем все
    if (user) {
      userScore = await getUserScore(user);
    }
    console.log('userScore = ', userScore);
    return await getPlansFromApi(userScore, plan);
  } catch (error) {
    console.log('error = ', error);
    return [];
  }
}
