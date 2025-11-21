# Base image
FROM node:20-alpine3.18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# COPY package.json .
# COPY package-lock.json .

COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# PORTS TO EXPOSE (8000 - 8005 range and 3000 and 3001 separately)
EXPOSE 8000-8005 3000 3001

#Start the application
CMD ["npm", "start"]

