# TechStock API - Backend Services ⚙️

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

This directory contains the RESTful API built to serve the TechStock inventory management system. It acts as the central data engine, processing CRUD operations and exposing endpoints exclusively for the frontend client.

## 🗂️ Architecture & Scope

The backend is structured using a standard MVC-inspired layered architecture to maintain separation of concerns:

* **`src/routes/`**: Endpoint definitions and HTTP method mapping (GET, POST, PUT, DELETE).
* **`src/controllers/`**: Core business logic, request validation, and response formatting.
* **`src/models/`**: Data layer simulation (in-memory arrays) designed for seamless migration to a relational database like MySQL in the future.

## 💻 Tech Stack Highlights

* **Runtime:** Node.js
* **Framework:** Express.js
* **Middlewares:** CORS (Cross-Origin Resource Sharing), Express JSON parser
* **Architecture:** REST API

## 🚀 Getting Started & Execution Rules

This backend operates independently on port `4000`. 

1. **Initialize and install dependencies:**
   ```bash
   cd node-js/Backend-techstock
   npm init -y
   npm install express cors