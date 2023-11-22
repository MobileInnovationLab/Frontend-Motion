FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY . .

RUN npm install --legacy-peer-deps

CMD ["npm", "run", "dev"]