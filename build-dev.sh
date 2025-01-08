#!/bin/bash
WORKING_DIR='/home/works/www/golang-draw'
LOG_DIR=$WORKING_DIR'/logs'
PATH_LOGS_DIR='/home/works/www/golang-draw/logs'
CONTAINER_LOGS_DIR=$PATH_LOGS_DIR

# 编译 Go 程序
echo "Building Go application..."

# cd /home/works/www/golang-draw/src/main
go build -o main ./src/main/main.go

# 删除重名的 container
docker ps -a | grep golang-draw && docker rm -f golang-draw

# 构建 Docker 镜像
echo "Building Docker image..."
docker build --build-arg ENVIRONMENT=dev -t golang-draw:dev .

# 删除编译的二进制文件
echo "Cleaning up..."
rm main

# 启动 Docker 镜像
echo "Starting Docker container..."

params="--restart=on-failure:10 -tid -v $PATH_LOGS_DIR:$CONTAINER_LOGS_DIR -d -p 10001:10001 --name golang-draw"
docker run $params golang-draw:dev

# nohup supervisord -c "/home/works/www/golang-draw/notes/supervisor.dev.conf" > nohup.out & disown
echo "Done."