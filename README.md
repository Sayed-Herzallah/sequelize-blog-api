🚀 Blog Platform Backend (Sequelize)

A scalable and production-style backend API for a blogging platform built with Node.js, Express, and Sequelize ORM.
The project demonstrates clean architecture, relational database design, and secure authentication mechanisms.

📌 Overview

This backend system powers a blog platform where users can:

Register and authenticate securely
Create, update, and delete blog posts
Manage relational data using MySQL + Sequelize ORM
Interact with a structured RESTful API

The project follows MVC architecture to ensure maintainability, scalability, and clean separation of concerns.

✨ Features
🔐 User authentication (Register / Login)
🛡 Secure password hashing
🎫 JWT-based authentication system
📝 Full CRUD operations for blog posts
🗄 Relational database modeling with Sequelize
🧩 MVC architecture structure
📡 RESTful API design
⚠ Centralized error handling
📊 Scalable database schema design
🛠 Tech Stack
Runtime: Node.js
Framework: Express.js
Database: MySQL
ORM: Sequelize
Authentication: JWT
Architecture: MVC Pattern
Language: JavaScript (ES6+)
📂 Project Structure
Src/
 ├── controllers/      # Business logic
 ├── models/           # Sequelize models
 ├── routes/           # API routes
 ├── middleware/       # Auth & error handling
 ├── config/           # Database configuration
 └── app.js            # Entry point
⚙️ Installation
# Clone repository
git clone https://github.com/Sayed-Herzallah/My-Blog-Back-end-Sequelize.git

# Navigate to project
cd My-Blog-Back-end-Sequelize

# Install dependencies
npm install

# Run server
npm run dev
🔐 Environment Variables

Create a .env file and add:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog_db
JWT_SECRET=your_secret_key
📡 API Endpoints (Sample)
Auth
POST /auth/register → Register new user
POST /auth/login → Login user
Posts
GET /posts → Get all posts
POST /posts → Create post
PUT /posts/:id → Update post
DELETE /posts/:id → Delete post
🧠 Architecture

The system is built using MVC pattern:

Client → Routes → Controllers → Services (if used) → Models → Database

This ensures:

Clean separation of logic
Easy scalability
Maintainable codebase
🚀 Project Highlights
Relational database design using Sequelize
Secure authentication system with JWT
Scalable backend structure
REST API best practices
Clean and modular architecture
👨‍💻 Developer

Sayed Herzallah
Full-Stack Developer (Backend Focused)

GitHub: Sayed-Herzallah
LinkedIn: sayed-herzallah
📜 License

This project is open-source and available under the MIT License.

⭐ If you like this project
Give it a ⭐ on GitHub
Share it with others
Contribute improvements
