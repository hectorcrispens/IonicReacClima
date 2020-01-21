FROM node:8

ENV HTTP_SERVER_VERSION 0.9.0
RUN npm install -g http-server@0.9.0
RUN npm install -g ionic
RUN npm install -g npx
RUN npm install -g capacitor


CMD http-server

EXPOSE 8081
