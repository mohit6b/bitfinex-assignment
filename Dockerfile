# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Expose a port for your Node.js application
EXPOSE 3000

# Define environment variables (optional)
# ENV NODE_ENV=production

# Command to run your Node.js application
CMD ["npm", "start"]
