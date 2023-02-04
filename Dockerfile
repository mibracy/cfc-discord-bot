# syntax=docker/dockerfile:1
FROM node:16.18.1

WORKDIR /cfc-discord-bot
COPY . .

RUN npm run deploy
CMD ["npm", "start"]