FROM node:20-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.24-bullseye-perl
EXPOSE 3000
COPY --from=build /app/build /usr/share/nginx/html