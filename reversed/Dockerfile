FROM node:8-alpine
MAINTAINER Ivan Torrellas ivan.torrellas@gmail.com
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY reversed.js .
EXPOSE 4000
CMD [ "npm", "start" ]
