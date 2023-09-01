FROM node:16

WORKDIR /api
COPY . /api
RUN npm i
EXPOSE 3000
RUN chmod +x startup.sh
RUN npm i -g sequelize-cli
RUN npm i -g nodemon

ENTRYPOINT [ "./startup.sh" ]
