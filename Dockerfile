FROM node:alpine

WORKDIR /data

COPY package.json /data/package.json
RUN npm install

COPY ./ ./

EXPOSE 80

CMD ["npm", "start"]
