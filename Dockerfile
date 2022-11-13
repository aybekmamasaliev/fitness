# https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html
# sudo docker stop $(sudo docker ps -q --filter ancestor=booking-frontend)
# sudo docker build -t booking-frontend .
# sudo docker run -dp 3080:80 --env-file ./.env booking-frontend 
# sudo docker run -dp 8538:80 --env-file ./.env booking-frontend 
# sudo docker exec -ti $(sudo docker ps -q --filter ancestor=booking-frontend) sh

# build stage
FROM --platform=linux/amd64 node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM --platform=linux/amd64 nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY .docker-config/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
