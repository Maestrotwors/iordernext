FROM node:18 as build-env

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build:front

FROM nginx:1.18.0

COPY --from=build-env /app/dist/apps/frontend /app
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD nginx -g 'daemon off;'
