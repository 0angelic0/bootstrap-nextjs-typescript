#/bin/bash

# Usage 
# ./build.sh 1.0.0

yarn build
docker login gitlab.xxx.com:4567 -u user -p pass
docker build -t gitlab.xxx.com:4567/user/project/backoffice:$1 .
docker push gitlab.xxx.com:4567/user/projec/backoffice:$1