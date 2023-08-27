FROM node:20
WORKDIR /front
COPY package.json .
RUN yarn
COPY . .
CMD ["yarn", "build"]

COPY dist .
CMD ["npx", "serve", "."]
