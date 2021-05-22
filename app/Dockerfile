FROM node:alpine

WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app
#COPY ./yarn.lock /app

RUN npm install

CMD ["yarn", "run", "start"]