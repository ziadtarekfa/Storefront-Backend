# Udacity: Build A Storefront Backend

This Node.js backend API has been developed for an E-Commerce store, providing a RESTful API designed for use by frontend developers. You can refer to the REQUIREMENTS.md file for details on the database schema and API routes.

## Tech Stack
- PostgreSQL Database
- NodeJS
- TypeScript
- Unit Testing with Jasmine
- Endpoints Testing with Supertest
- MVM Architecture

## Getting Started

1. Clone this repository to your local machine
```
git clone https://github.com/ziadtarekfa/Storefront-Backend.git
```
2. Navigate to the project directory
```
cd storefront-backend
```
3. Install the project dependencies.
```
npm install
```
4. Set up the production and test databases.
```
- Connect to the default postgres database as the server's root user `psql -U postgres`
- In psql run the following to create a user 
    - CREATE USER postgres WITH PASSWORD 'hello123';
- In psql run the following to create the dev and test database
    - CREATE DATABASE storefront_backend;
    - CREATE DATABASE storefront_backend_test;
- Connect to the databases and grant all privileges
```
5. Migrate database
```
db-migrate-up
```

6. Set up environment variables
Below, you'll find a list of environmental variables that should be configured within a **.env** file.

```
POSTGRES_HOST=localhost
POSTGRES_DB=storefront_backend
POSTGRES_USER=postgres
POSTGRES_PASSWORD="hello123"
POSTGRES_PORT=5432
ENV=dev
SERVER_PORT=5050
POSTGRES_DB_TEST=storefront_backend_test
TOKEN_SECRET=514736ff9b5b1d0f51d3a4d6188960c830591de92c275228c71840f1f561f628603f1d9953d6fcd620967543bac65a3a2a499ed7ac9c2557fef63295f5c04b31
```

7. Start app
```
npm run start
```

## Running Ports 
After start up, the server will start on port `5050` and the database on port `5432`

## Endpoint Access
All endpoints are described in the [REQUIREMENT.md](REQUIREMENTS.md) file. 

## Token and Authentication
Tokens are passed along with the http header as a **Bearer** Token

## Testing
Run test with 
```
npm run test
```

## Acknowledgements
This project is inspired by the Udacity FWD program.