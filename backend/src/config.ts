export type TConfig = {
  api_address: string;
  scoring_address: string;
  port: number;
};

export const config: TConfig = {
  api_address: 'http://localhost:5001',
  scoring_address: 'http://localhost:5555',
  port: 5000,
};

export const loadConfig = () => {
  config.api_address = process.env.API_ADDRESS
    ? process.env.API_ADDRESS
    : config.api_address;
  config.scoring_address = process.env.SCORING_ADDRESS
    ? process.env.SCORING_ADDRESS
    : config.scoring_address;

  config.port = Number(process.env.PORT ? process.env.PORT : config.port);
};
