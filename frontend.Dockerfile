FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:1.21

COPY --from=build /app/dist/apps/frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
