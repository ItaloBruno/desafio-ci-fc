FROM node:22.18-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY src/ ./src

CMD ["npm", "test"]
