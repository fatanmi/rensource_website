### STAGE 2: Setup ###
FROM nginx:1.13.12-alpine
COPY . /usr/share/nginx/html
# Copying nginx configuration.
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
# Copying openhome-panel source into web server root.
#COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
# Exposing ports.
EXPOSE 80
# Starting server.
CMD ["nginx", "-g", "daemon off;"]
