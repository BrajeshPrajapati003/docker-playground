
# Docker Compose = Multi-container Orchestration Tool

It lets you define and run multiple containers (backend, frontend, database, cache, queues, etc.) using a single YAML file.

Instead of running 5–10 docker run commands manually, you do:

**docker compose up -d**

And BOOM — your entire system starts.

---------------------------------------

**Compose handles:**
* networking
* volumes
* build steps
* dependencies
* environment variables
* port mapping
* multi-container orchestration

ALL in one file.

------------------------------------------

🐳 **Why did your containers appear “grouped” when using Docker Compose?**

Because Docker Compose automatically groups all containers under a single project name.

This is NOT an error — it’s by design.



Compose creates a group (called a project) using:

**Project name = the folder name of your docker-compose.yml**

So if your folder name is:

docker-playground


Your containers will appear as:

docker-playground_nginx_1
docker-playground_redis_1
docker-playground_alpine_1


----------------------------------------------------

**Docker commands :**

* docker compose up -d (start all containers)
* docker compose down (stop and remove containers)
* docker compose up --build -d (rebuild images + start)
* docker compose logs -f (view logs of all services)
* docker compose ps (check running containers)
* docker compose stop redis (stop one service)
* docker compose exec redis sh (run a one-off command inside a service)
  
  --------------------------------------------------


version: '3.8'
services:
  app:
    image: your-image-name
    build:
      context: contextPath
      dockerfile: Dockerfile
    ports:
      - "8080:80"
    volumes:
      - ./app:/app
    environment:
      - ENV_VAR_NAME=value
    networks:
      - app-networkName

