#Stage 1
FROM node:21-alpine as builder
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ .
EXPOSE 3000
CMD ["npm", "run", "dev"]