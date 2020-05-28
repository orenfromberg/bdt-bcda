 FROM node:current-slim

 WORKDIR '/'

 COPY package.json .
 RUN npm install

 CMD ["npm", "start"]
 COPY . .

