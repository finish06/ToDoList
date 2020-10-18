#! /bin/bash

# Frontend
echo "Building frontend"

# Build container
echo "Building docker container"
docker build -t todo-frontend -f client/Dockerfile .

# Update local registry
echo "Tagging container for update to registry"
docker tag todo-frontend docker.du.nn/todo-frontend:latest
echo "Pushing container to registry"
docker push docker.du.nn/todo-frontend:latest


# Backend
echo "Building backend"

# Build container
echo "Building docker container"
docker build -t todo-backend -f server/Dockerfile .

# Update local registry
echo "Tagging container for update to registry"
docker tag todo-backend docker.du.nn/todo-backend:latest
echo "Pushing container to registry"
docker push docker.du.nn/todo-backend:latest