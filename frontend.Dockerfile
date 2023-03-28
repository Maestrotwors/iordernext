FROM katsuba/spa-nginx:1.23

COPY dist/apps/frontend /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-c", "/etc/nginx/conf.d/default.conf", "-p", "."]
