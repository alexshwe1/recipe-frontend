# Use the official Node.js image as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use a smaller, production-ready image as the final image
FROM nginx:alpine

# Copy the build files from the previous stage into the NGINX server's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
