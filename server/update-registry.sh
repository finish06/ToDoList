# Build container
echo "Building docker container"
docker build -t todo-backend -f Dockerfile .

# Update local registry
echo "Tagging container for update to registry"
docker tag todo-backend docker.du.nn/todo-backend:latest
echo "Pushing container to registry"
docker push docker.du.nn/todo-backend:latest