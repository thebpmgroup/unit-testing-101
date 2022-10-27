FROM node:19-alpine3.15
RUN npm i -g typescript
WORKDIR app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]