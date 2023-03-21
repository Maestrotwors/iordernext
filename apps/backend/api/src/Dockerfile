FROM node:18 as build-env

WORKDIR /app

COPY . .

RUN nx serve backend-api

COPY --from=build-env /app/dist/apps/backend/api /app/
