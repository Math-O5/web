
Install database

```docker
docker pull postgres
docker pull dpage/pgadmin4
docker network create --driver bridge postgres-network

# show network created
sudo docker network ls

```

Init containers

```docker
docker stop $(docker ps -q)
docker run  --restart --name user-auth --network=postgres-network -e "POSTGRES_PASSWORD=Postgres2024!" -p 5432:5432 -v /home/math/Downloads/user/data:/var/lib/postgresql/data -d postgres

docker run  --restart --name pgadmin --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=mathfern4@gmail.com" -e "PGADMIN_DEFAULT_PASSWORD=PgAdmin2024!" -d dpage/pgadmin4
```

Install IntelliJ IDEA and run application.

