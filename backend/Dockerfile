FROM node:20

WORKDIR /back
COPY package.json /back
RUN yarn
COPY . /back
CMD yarn start

