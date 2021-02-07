
FROM node:10.15.0

ENV HOME=/home/

RUN mkdir -p $HOME/app

COPY . $HOME/app/.

WORKDIR $HOME/app

EXPOSE 3000

CMD ["npm", "run", "prod"]
