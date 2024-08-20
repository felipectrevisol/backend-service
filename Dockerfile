FROM node:18.20
WORKDIR /app-api
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]