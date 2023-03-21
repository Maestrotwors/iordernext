FROM node:18 as build-env

WORKDIR /app

COPY . .

RUN nx build frontend --prod && nx run frontend:prerender --routes-file routes.txt && node dist/apps/frontend/server/main.js
