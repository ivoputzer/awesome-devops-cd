FROM node:alpine

WORKDIR /data

COPY package.json /data/package.json
RUN npm install

COPY ./ ./

EXPOSE 8080

CMD ["npm", "start"]
