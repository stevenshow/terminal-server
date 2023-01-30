# Use an existing image as the base image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json file to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files to the container
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Specify the command to run when the container starts
CMD [ "npm", "start" ]