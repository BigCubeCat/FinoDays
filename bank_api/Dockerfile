FROM node:20

WORKDIR /api
COPY package.json /api
RUN yarn
COPY . /api
CMD yarn start

