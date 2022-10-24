#!/bin/bash

cd backend

echo "Init Server..."
docker-compose up -d
echo "OK\n"

sleep 10

echo "Migrations..."
docker-compose exec node bash -c 'yarn typeorm migration:run'
echo "OK\n"

cd ../

echo "App..."
docker-compose up -d

sleep 5

docker-compose exec app bash -c 'yarn start'
echo "OK\n"