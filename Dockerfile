FROM node:current-slim

WORKDIR '/'

RUN apt update -y && apt install curl jq -y

COPY package.json .
RUN npm install

COPY . .

CMD ["./run-bdt.sh"]