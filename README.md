# Backend for Qtec E-Commerce SPA

This backend provides a simple REST API to support the frontend e-commerce application by managing product data.

---

## 🧰 Tech Stack

- **Node.js** with **Express.js** for building REST APIs  
- **MongoDB** as the database (hosted locally or via MongoDB Atlas)  
- **Mongoose** for MongoDB object modeling and schema management

---

## 📦 Features

- API endpoint to **fetch all products**  
- API endpoint to **fetch a single product by ID**  
- Product schema with fields:  
  - `title` (string, required)  
  - `description` (string, required)  
  - `quantity` (number, required)  
  - `price` (number, required)  
  - `image` (string URL, required)  
- Timestamps for product creation and update  
- No authentication or cart persistence (optional future enhancement)

---

## 🚀 Getting Started (Backend)

### Prerequisites

- Node.js   
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sariothossain1011/qtec_task_backend.git
cd qtec-task-frontend
```
### 2. Install Dependencies

```bash
npm install
```
### Create a config.env file with your MongoDB connection string:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
### 4. Start the backend server:

```bash
npm run start
```
## 📄 API Endpoints

| Method | Endpoint                     | Description                         |
| ------ | ---------------------------- | ----------------------------------- |
| POST   | `/api/v1/product-create`     | Retrieve all products               |
| GET    | `/api/v1/product/:id`        | Retrieve a single product by its ID |
| GET    | `/api/v1/products`           | Retrieve all products               |



## 🔧 Code Structure
- index.js — Entry point of the backend server and MongoDB connection setup(for simple prject)

- models/ProductModel.js — Mongoose schema and model for products

- routes/productRoutes.js — Routes handling product API endpoints

- controllers/productController.js — Controller functions for product logic

## 👩‍💻 Usage
### This backend serves product data for the frontend React SPA. You can use it as a standalone API or extend it to include cart persistence or user authentication.
