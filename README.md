# Project Name : Bike Store
# Api Link : [Link](https://bike-store-backend-flax.vercel.app/)

This project is the server for a Bike Store application, built using TypeScript and Node.js. It integrates with MongoDB via Mongoose to handle database operations while ensuring data integrity with schema validation.

## Features: 
1. Bike Management:
   1. Create a new bike with required details (name, brand, price, category- (Mountain, Road, Hybrid, Electric), description, quantity, inStack).
   2. Retrieve all bikes available in the store.
   3. Fetch information about a specific bike by ID.
   4. Update the details of a bike.
   5. Delete a bike from the inventory.
2. Order Management:
   1. Place an order for a bike.
   2. Calculate total revenue generated from all orders using aggregation pipelines.

## Tech Stack
1. Programming Language: TypeScript
2. Database: MongoDB
3. ODM (Object Data Modeling): Mongoose
4. Runtime Environment: Node.js

## API Endpoints
### Bike Management
1. Create a Bike: POST- /api/products
2. Get All Bikes: GET- /api/products
3. Get a Specific Bike: GET- /api/products/:productId
4. Update a Bike: PUT- /api/products/:productId
5. Delete a Bike: DELETE - /api/products/:productId
### Order Management
1. Order a Bike: POST- /api/orders
2. Calculate Revenue: GET- /api/orders/revenue

### Project setup guideline
Step 1: Clone the Repository
``` git
git clone https://github.com/Mosharof-Hossen/bike-store-server-l2A.git
cd bike-store-server-l2A
```
Step 2: Install Dependencies
``` javascript
npm install
```
Step 3: Set Up Environment Variables
``` javascript
MONGO_URI=mongodb://......./bikes-tore
PORT=4000
```
Step 4: Compile TypeScript Code
```javascript
npm run build
```
Step 5: Start the Server
```javascript
npm run start:dev
```

Author <br>
Mosharof Hossen <br>
[GitHub Profile](https://github.com/Mosharof-Hossen)





