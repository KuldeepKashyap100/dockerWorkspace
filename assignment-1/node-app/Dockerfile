FROM node:14

WORKDIR /nodeApp

COPY package.json /nodeApp

RUN npm install

COPY . /nodeApp

CMD ["node", "server.js"]