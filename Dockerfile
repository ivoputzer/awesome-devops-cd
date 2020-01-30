FROM node:latest

RUN mkdir /data
VOLUME /data

COPY index.js /data/index.js
COPY package.json /data/package.json
RUN cd data
RUN npm install

WORKDIR /data

EXPOSE 8080

CMD ["npm", "start"]
