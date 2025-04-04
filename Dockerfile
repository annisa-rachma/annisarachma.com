# Build Stage: Build the React App using Node
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .  
RUN npm run build

# Production Stage: Use Nginx to serve the app
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf  
COPY --from=build /app/dist /usr/share/nginx/html        
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
