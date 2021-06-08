FROM node:15-alpine

WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm ci

COPY . /app

CMD ["npm", "run", "dev"]
