FROM node:12-alpine

WORKDIR /var/www/html

COPY ./ .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]