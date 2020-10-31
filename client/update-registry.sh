# Build container
echo "Building docker container"
docker build -t todo-frontend .

# Update local registry
echo "Tagging container for update to registry"
docker tag todo-frontend 192.168.1.41:25129/todo-frontend:latest
echo "Pushing container to registry"
docker push 192.168.1.41:25129/todo-frontend:latest

if [ -z $1 ]
then
    echo "Provide a version #"
else
    # Update local registry
    echo "Tagging container for update to registry"
    docker tag todo-frontend 192.168.1.41:25129/todo-frontend:$1
    echo "Pushing container to registry"
    docker push 192.168.1.41:25129/todo-frontend:$1

