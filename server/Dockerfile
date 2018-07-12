FROM node:9.11.2-slim
WORKDIR /usr/src/vue-adonis-todo/server
RUN apt-get update
RUN apt-get --yes install git-core
RUN apt-get --yes install sqlite3
RUN npm install -g @adonisjs/cli
ADD . /usr/src/vue-adonis-todo/server