FROM nginx:alpine

COPY build/ /usr/share/nginx/html/docs
COPY nginx.conf /etc/nginx/conf.d/default.conf
