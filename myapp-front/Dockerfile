# Stage 1: Build the Angular app in a node container
FROM node:20 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build-prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine

COPY --from=build /app/dist/myapp-front /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
