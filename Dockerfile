FROM node:16-alpine

WORKDIR /app
COPY package.json .

# Install PNPM
RUN npm i -g pnpm

RUN pnpm i

COPY . .

CMD ["npm", "run", "dev"]
