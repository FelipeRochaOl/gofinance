#!/bin/bash

cd backend

docker-compose up -d

sleep 5

docker-compose exec -it node bash yarn typeorm migration:run

cd ../

docker-compose up -d

sleep 5

docker-compose exec -it app bash yarn start