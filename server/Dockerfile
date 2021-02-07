
FROM node:10.15.0

ENV HOME=/home/

RUN mkdir -p $HOME/app

COPY . $HOME/app/.

WORKDIR $HOME/app

RUN rm -rf node_modules

RUN npm install

EXPOSE 3000

RUN pwd

CMD ["npm", "run", "dev"]
