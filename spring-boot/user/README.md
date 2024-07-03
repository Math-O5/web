## Requeriments
- Docker
- Java 17 or higher (https://spring.io/blog/2022/05/24/preparing-for-spring-boot-3-0)


## Status Development
Autenticação JWT (done)
CRUD User (done)
    - Create, update, delete (done)
CRUD ADDRESS (doing)
    - Create, update (Done)
    - Querying (X)
Docker compose (Doing)
    - set up env docker (Done)
    - pass to yml (X)
Documentation (Doing)
    - Config swagger (Done)
    - customize swagger (X)
Test (Doing)
    - authentication (Done)
    - address (X)

## Routes

### Monitor (health)
GET http://localhost:8080/api/v1/health

### Register
POST http://localhost:8080/api/v1/auth/register
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "1234"
}

### Login
POST http://localhost:8080/api/v1/auth/authentication
{
    "email": "john.doe@example.com",
    "password": "1234"
}

### Create address
POST http://localhost:8080/api/v1/address
Authorization: Bearer {{new-auth-token}}
{
    "street":"av sao carlos",
    "city":"São carlos",
    "zipCode":"0802"
}


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

