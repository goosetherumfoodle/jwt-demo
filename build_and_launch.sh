#! /bin/bash

docker-compose stop && docker-compose down
# run docker garbage collection script: https://github.com/zzrotdesign/docker-clean
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock zzrot/docker-clean
rm -r client/node_modules
rm -r client/build
docker-compose build
docker-compose up &
sleep 10
docker-compose run server rake db:setup
