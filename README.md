# Product Management API

## Overview

This project is a RESTful API for managing products, built with Node.js and Express. It allows you to create, read, update, and delete products. The API also supports filtering products by category and handles basic product validation.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete products.
- **Product Validation**: Basic validation for product data.
- **Error Handling**: Custom error handling middleware.
- **File Storage**: Products are stored in a JSON file.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express**: Web framework for Node.js.
- **TypeScript**: Superset of JavaScript with static types.
- **fs/promises**: Node.js file system API for reading and writing files.

## Project Structure

- **`src/`**: Contains the source code.
  - **`controllers/`**: Request handlers for the API endpoints.
  - **`middleware/`**: Custom middleware for error handling.
  - **`routes/`**: API routes.
  - **`services/`**: Business logic and data handling.
  - **`utils/`**: Utility functions like validation.
  - **`interfaces/`**: TypeScript interfaces.
- **`data/`**: Contains the `products.json` file for storing product data.
- **`index.ts`**: Entry point of the application.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: Project metadata and dependencies.
- **`README.md`**: Project documentation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/galstyann03/product-management-api
   cd product-management-api

2. Install dependencies:
   ```bash
   npm install

3. Start the application
   ```bash
   npm start

By default, the application will run on port 3000. You can change the port by setting the PORT environment variable.

API Endpoints
GET /api/products: Get a list of products. Optionally filter by category using the category query parameter.
GET /api/products/:id: Get a product by its ID.
POST /api/products: Create a new product. Requires a JSON body with product details.
PUT /api/products/:id: Update a product by its ID. Requires a JSON body with the fields to be updated.
DELETE /api/products/:id: Delete a product by its ID.
Error Handling
Errors are handled by a custom middleware. The middleware sends a JSON response with an appropriate status code and error message.

Validation
Product data is validated to ensure that:

The price is a positive number.
The stock available is a non-negative number.

Author: Narek Galstyan
Reviewers: Albert Ayvazyan, Hayk Dadyan
