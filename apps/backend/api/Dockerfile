FROM node:18-alpine AS build

WORKDIR ../../../

COPY package*.json ./
RUN npm i
COPY . .
RUN npx nx build backend-api --prod
COPY --from=build /app/dist/apps/backend/api /app/dist/apps/backend/api

CMD ["node", "dist/apps/api/backend/main"]
