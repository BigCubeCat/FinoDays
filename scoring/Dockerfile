FROM node:20

WORKDIR /sc
COPY package.json /sc
RUN yarn
COPY . /sc
CMD yarn start

