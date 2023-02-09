## Token that needs to be attached is 
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJhaG1lZCIsImxhc3ROYW1lIjoiQWx5IiwiaWF0IjoxNjc1MzUwODU5fQ.ixq7tJJ6pUvst80TeKA7A5wlGfcCCmwtamMCsB_B0OE
```
###  API Endpoints
#### Users
- Index 
  * Method           -  GET
  * Authorization required    - Bearer Token
  * Parameters    np    - none
  * Usage             - get all users
  * http://localhost:3000/users

- Show 
  * Method           -  GET
  * Authorization required    - Bearer Token
  * URL Parameters        - id
  * Usage             - get a single User
  * http://localhost:3000/users/:id
 

- Create User
  * Method           -  POST
  * Authorization required    - No
  * Request Body Parameters

       ```
       { "firstName": "john",  "lastName": "mark","password": "mark182"}
       ```
  * http://localhost:3000/users/create

#### Products

- Index 
  * Method           -  GET
  * Authorization required    -No
  * Parameters        - none
  * Usage             - get all products
  * http://localhost:3000/products

- Show 
  * Method           -  GET
  * Authorization required    - No
  * Parameters        - id
  * Usage             - get a single product
  * http://localhost:3000/products/:id
 

- Create Product
  * Method           -  POST
  * Authorization required    - Bearer Token
  * Request Body Parameters    

  ```
  {"name":"Samsung  A77", "price": 1201}
  ```
  * http://localhost:3000/products/create


#### Orders 

- Create Order
  * Method           -  POST
  * Authorization required    - Bearer Token
  * Request Body Parameters   

  ```
  {"userId":1, "status":"active"}
  ```
  * http://localhost:3000/orders/create


- Get current orders for a specific user
  * Method           -  GET
  * Authorization required    - Bearer Token
  * URL Parameters        -  id
  * http://localhost:3000/orders/current/user_id/:id

  #### Order-Products
  - Create Ordered Product
  * Method            - POST
  * Authorization required    - Bearer  Token
  * Request Body Parameters 

  ```
  {  "orderId":2, "productId":1,"quantity":20}
  ```
  * http://localhost:3000/ordered-products/create


  
### Data Schema
#### Users Table

| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| firstname | VARCHAR(50) 
| lastname | VARCHAR(50) 
| password | VARCHAR(100)
#### Products Table
| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| name | VARCHAR(50) |
| price | INTEGER |

#### Orders Table
| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| user_id | INT |  REFERENCES users(id) | NOT NULL |
| status | VARCHAR(50) |


#### Order_products Table
| Data | Data Types | Constraints  |
| ------------------ | ------------------ |  ------------------ |
| id | SERIAL | PRIMARY KEY |
| order_id | INTEGER | REFERENCES orders(id) |
| product_id | INTEGER | REFERENCES products(id) |
| quantity | INTEGER |  |

