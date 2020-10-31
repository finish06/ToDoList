# Build container
echo "Building docker container"
docker build -t todo-backend -f Dockerfile .

# Update local registry
echo "Tagging container for update to registry"
docker tag todo-backend 192.168.1.41:25129/todo-backend:latest
echo "Pushing container to registry"
docker push 192.168.1.41:25129/todo-backend:latest

if [ -z $1 ]
then
    echo "Provide a version #"
else
    # Update local registry
    echo "Tagging container for update to registry"
    docker tag todo-backend 192.168.1.41:25129/todo-backend:$1
    echo "Pushing container to registry"
    docker push 192.168.1.41:25129/todo-backend:$1
fi