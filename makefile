up:
	docker compose up --build -d

down:
	docker compose down


status:
	docker compose ps

clean:
	docker compose down -v --rmi all

reset: down clean

logs:
	docker compose logs 