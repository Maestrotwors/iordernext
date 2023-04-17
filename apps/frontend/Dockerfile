# Стадия 1: Сборка проекта Angular
FROM node:18-alpine AS build

WORKDIR ../../

COPY package*.json ./
RUN npm ci
COPY . .
RUN npx nx build frontend --prod

# Стадия 2: Настройка Nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist/apps/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
