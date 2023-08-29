import {TPlanDTO} from '../dtos_v2/planDTO';
import {getUserScore} from './scoreApiBridge';
import {TUserDto} from '../dtos_v2/userDTO';
import {config} from '../config';
import {TPlanRequestDTO} from '../dtos/requestDTO';
import {fetchPost} from './utils';

export async function getPlans(
  user: TUserDto | undefined,
  plan: TPlanRequestDTO,
): Promise<TPlanDTO[]> {
  try {
    let userScore = Infinity; // Если нет пользователь не задан, выдаем все
    if (user) {
      userScore = await getUserScore(user);
    }
    return await fetchPost(config.api_address + "/plan/match", {
      score: userScore,
      plan: plan,
    });
  } catch (error) {
    console.log('error = ', error);
    return [];
  }
}
