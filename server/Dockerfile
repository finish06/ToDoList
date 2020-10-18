# Multi-stage
# Node 12 base image
FROM node:12 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# Install node modules and build assets
RUN npm install
# Run Node server
CMD ["node", "index"]
