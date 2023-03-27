FROM node:18 as build-env

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build:api
