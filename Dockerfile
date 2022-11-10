# https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app.html
# docker stop $(docker ps -q --filter ancestor=booking-frontend )
# docker build -t booking-frontend .
# docker run -dp 3080:80 --env-file ./.env booking-frontend 

# build stage
FROM --platform=linux/amd64 node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM --platform=linux/amd64 nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
