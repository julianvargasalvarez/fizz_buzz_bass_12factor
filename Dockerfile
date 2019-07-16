FROM node

WORKDIR /app
EXPOSE 8080

RUN npm install nodemon -g
RUN touch /tmp/nada
RUN apt-get update -y
RUN apt-get install -y vim
