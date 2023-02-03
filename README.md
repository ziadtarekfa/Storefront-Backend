
# .env
PORT=3000

# Environment Variables

POSTGRES_HOST=localhost
POSTGRES_DB=storefront_backend
POSTGRES_USER=postgres
POSTGRES_PASSWORD=hello123
POSTGRES_PORT=5432
TOKEN_SECRET=514736ff9b5b1d0f51d3a4d6188960c830591de92c275228c71840f1f561f628603f1d9953d6fcd620967543bac65a3a2a499ed7ac9c2557fef63295f5c04b31

# To start the project 
npm run start

# To run all tests
npm run test

# To build the project 
npm run build

# API EndPoints

## User
http://localhost:3000/users [GET,Index]
http://localhost:3000/users/:id [GET,Show]
http://localhost:3000/users/create [POST,CREATE]


## Products
http://localhost:3000/products [GET-Index]
http://localhost:3000/products/:id [GET,Show]
http://localhost:3000/products/create [POST,Create]

## Orders
http://localhost:3000/orders/create [POST,Create]
http://localhost:3000/orders/current/user_id/:id [GET]
