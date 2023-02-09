
## Environment Variables
```
POSTGRES_HOST=localhost
POSTGRES_DB=storefront_backend
POSTGRES_USER=postgres
POSTGRES_PASSWORD=hello123
POSTGRES_PORT=5432
ENV=dev
SERVER_PORT=3000
POSTGRES_DB_TEST=storefront_backend_test
TOKEN_SECRET=514736ff9b5b1d0f51d3a4d6188960c830591de92c275228c71840f1f561f628603f1d9953d6fcd620967543bac65a3a2a499ed7ac9c2557fef63295f5c04b31
```
## Setup
```npm install ``` to install all project dependencies

```npm run start ``` to start the server

```npm run build ``` to build the application into javascript

```npm run test  ``` to run tests

```db-migrate up ``` to run migrations for the database

```db-migrate down ``` to undo the database migrations

## Endpoints & Database Schema
Kindly check <u>requirements.md</u> for further details

## Scripts
```
    "start": "nodemon src/server.ts",
    "watch": "tsc-watch --esModuleInterop src/server.ts --outDir ./build --onSuccess \"node ./build/server.js\"",
    "tsc": "tsc",
    "build": "npx tsc",
    "test": "set ENV=test db-migrate up --config ./database.json -e test && npm run build && jasmine && db-migrate reset --config ./database.json -e test",
    "jasmine": "jasmine"
```

## Database Creation
```
CREATE DATABASE storefront_backend
CREATE DATABASE storefront_backend_test

```
## Ports
  Listening on port 3000 localhost for server
  Database is running on port 5432

  

