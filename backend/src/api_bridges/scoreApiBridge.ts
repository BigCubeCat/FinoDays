import http from 'http';
import { TUserDto } from "../dtos/userDTO";
import { TScoreResponseDTO } from '../dtos/scoreDTO';

/**
 * Retrieves the user score from the scoring API.
 *
 * @param {TUserDto} user - The user object containing the necessary data for scoring.
 * @return {Promise<number>} A promise that resolves to the user's score.
 */
export function getUserScore(user: TUserDto): Promise<number> {
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