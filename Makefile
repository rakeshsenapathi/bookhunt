
default: build

dc-build:
	docker-compose build app

# ---------- Development ----------
start: dc-build
	docker-compose run --service-ports app npm run start

sh: dc-build
	docker-compose run --entrypoint=sh --service-ports app

clean_containers:
	docker rm -f $$(docker ps -qa)

down:
	docker compose down
stop: down clean_containers