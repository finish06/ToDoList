# Build container
echo "Building docker container"
docker build -t todo-frontend .

# Update local registry
echo "Tagging container for update to registry"
docker tag todo-frontend docker.du.nn/todo-frontend:latest
echo "Pushing container to registry"
docker push docker.du.nn/todo-frontend:latest
