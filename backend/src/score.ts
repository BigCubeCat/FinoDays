import http from 'http';
import { TUserDto } from "./dtos/userDTO";
import { TScoreResponseDTO } from './dtos/scoreDTO';
import { TPlanDTO, TPlanResponseDTO, TPlanType } from './dtos/planDTO';

/**
 * Retrieves the user score from the scoring API.
 *
 * @param {TUserDto} user - The user object containing the necessary data for scoring.
 * @return {Promise<number>} A promise that resolves to the user's score.
 */
function getUserScore(user: TUserDto): Promise<number> {
    const body = JSON.stringify(user);
    const options = {
        host: 'scoring',
        port: 5555,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Length': Buffer.byteLength(body)
        }
    }

    return new Promise((resolve, reject) => {
        const req = http.request(options, (response) => {
            let result: TScoreResponseDTO = {
                score: 0
            };
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                result = JSON.parse(chunk);
            });
            response.on('end', () => {
                resolve(result.score);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(body);
        req.end();
    });
}

/**
 * Retrieves plans from the API based on a given score and type.
 *
 * @param {number} score - The score to use for retrieving plans.
 * @param {TPlanType} type - The type of plans to retrieve.
 * @return {Promise<TPlanDTO[]>} A promise that resolves with an array of plan DTOs.
 */
function getPlansFromApi(score: number, type: TPlanType): Promise<TPlanDTO[]> {
    const body = JSON.stringify({
        "score": score,
        "type": type
    });

    const options = {
        host: 'bank_api',
        port: 5001,
        path: `/get/match`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Content-Length': Buffer.byteLength(body),
        }
    }
    return new Promise((resolve, reject) => {
        const req = http.request(options, (response) => {
            let result: TPlanResponseDTO = {
                plans: []
            }
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                result = JSON.parse(chunk);
            })
            response.on('end', () => {
                resolve(result.plans);
            });
        })
        req.on('error', (error) => {
            reject(error);
        });
        req.write(body);
        req.end();
    });
}

/**
 * Retrieves the plans for a given user and plan type.
 *
 * @param {TUserDto} user - The user object.
 * @param {TPlanType} type - The type of plan.
 * @return {Promise<TPlanDTO[]>} A promise that resolves to an array of plan objects.
 */
export async function getUserPlans(user: TUserDto, type: TPlanType): Promise<TPlanDTO[]> {
    try {
        const userScore = await getUserScore(user);
        const plans = await getPlansFromApi(userScore, type);
        console.log('plans = ', plans);
        return plans;
    } catch (error) {
        console.log('error = ', error);
        return [];
    }
}
