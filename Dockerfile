FROM node:8.9.1-alpine
MAINTAINER 0angelic0
COPY ./package.json /project/package.json
WORKDIR /project
RUN npm install
COPY . /project
CMD NODE_ENV=production node dist/server.js