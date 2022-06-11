FROM node:latest as builder

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY ./ .
RUN npm run build --prod

FROM nginx:alpine
EXPOSE 5000
COPY --from=builder /app/dist/findmehome-dashboard /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf