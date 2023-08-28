export type TConfig = {
  api: {
    host: string;
    port: number;
  },
  scoring: {
    host: string;
    port: number;
  },
  port: number
};

export const config: TConfig = {
  api: {
    host: 'localhost',
    port: 5001,
  },
  scoring: {
    host: 'localhost',
    port: 5555,
  },
  port: 5000,
};

export const loadConfig = () => {
  config.api.host = process.env.API_HOST ? process.env.API_HOST : config.api.host;
  config.api.port = Number(
    process.env.API_PORT ? process.env.API_PORT : config.api.port)
  ;

  config.scoring.host = process.env.SCORING_HOST ? process.env.SCORING_HOST : config.scoring.host;
  config.scoring.port = Number(
    process.env.SCORING_PORT ? process.env.SCORING_PORT : config.scoring.port,
  );

  config.port = Number(process.env.PORT ? process.env.PORT : config.port);
};