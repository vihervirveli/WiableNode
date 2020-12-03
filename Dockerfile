FROM node:12

WORKDIR /usr/src/app

RUN apk add --no-cache tzdata
ENV TZ Europe/Helsinki

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
VOLUME /react/sivu
CMD ["node", "app.js"]