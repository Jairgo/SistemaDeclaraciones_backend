FROM node:16-buster as builder

#MAINTAINER Sergio Rodríguez <sergio.rdzsg@gmail.com>

ADD . /backend
WORKDIR /backend

ARG NODE_ENV

RUN yarn add global yarn \
&& yarn install \
&& yarn build \
&& yarn cache clean

EXPOSE ${PORT}

CMD ["yarn", "start"]
