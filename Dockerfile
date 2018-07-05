FROM node:9.11.2-slim
WORKDIR /usr/src/vue-adonis-todo
RUN apt-get update
RUN apt-get --yes install git-core
RUN npm install -g @vue/cli
RUN npm install -g @adonisjs/cli
ADD . /usr/src/vue-adonis-todo/