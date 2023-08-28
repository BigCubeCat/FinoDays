import http from 'http';
import { TPlanDTO, TPlanResponseDTO, TPlanType } from '../dtos/planDTO';
import { getUserScore } from './scoreApiBridge';
import { TUserDto } from '../dtos/userDTO';
import { config } from '../config';
import { TPlanRequestDTO } from '../dtos/requestDTO';


function getPlansFromApi(score: number, plan: TPlanRequestDTO): Promise<TPlanDTO[]> {
  const body = JSON.stringify({
    score: score,
    plan: plan,
  });

  const options = {
    host: config.api.host,
    port: config.api.port,
    path: `/get/match`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
  };
  return new Promise((resolve, reject) => {
    const req = http.request(options, (response) => {
      let result: TPlanResponseDTO = {
        plans: [],
      };
      response.setEncoding('utf8');
      response.on('data', (chunk) => {
        result = JSON.parse(chunk);
      });
      response.on('end', () => {
        resolve(result.plans);
      });
    });
    req.on('error', (error) => {
      reject(error);
    });
    req.write(body);
    req.end();
  });
}

export async function getUserPlans(
  user: TUserDto,
  plan: TPlanRequestDTO,
): Promise<TPlanDTO[]> {
  try {
    const userScore = await getUserScore(user);
    const plans = await getPlansFromApi(userScore, plan);
    return plans;
  } catch (error) {
    console.log('error = ', error);
    return [];
  }
}
