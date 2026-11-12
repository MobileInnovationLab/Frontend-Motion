FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY . .

RUN npm install --legacy-peer-deps

CMD ["npm", "run", "dev"]
