echo $GOPATH
go run src/main/main.go --port=10003 --log=test.api --mode=dev --conf=$(pwd)/src/configs/dev.ini
