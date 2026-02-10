🚀 VaultPay – Money Transfer Application

VaultPay is a full-stack money transfer application that allows users to securely register, log in, manage their wallet, and transfer money between users.
The project is built using Spring Boot for the backend and React + Tailwind CSS for the frontend.

This project demonstrates real-world backend logic, authentication, wallet management, and a modern frontend UI.

🛠️ Tech Stack
Backend

Java 17

Spring Boot

Spring Security (JWT Authentication)

Spring Data JPA (Hibernate)

MySQL

Maven

Frontend

React

Tailwind CSS

Axios

Vite

✨ Features

User Registration & Login (JWT based authentication)

Secure wallet creation for each user

Add balance to wallet

Transfer money between users

Transaction validation and error handling

RESTful APIs

Clean and responsive UI

📁 Project Structure
VaultPay/
│
├── backend/        # Spring Boot application
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── dto
│
├── frontend/       # React + Tailwind application
│   ├── src
│   └── public
│
└── README.md

▶️ How to Run Locally
🔹 Backend (Spring Boot)
cd backend
mvn spring-boot:run


📌 Backend will start at:

http://localhost:8080

🔹 Frontend (React + Tailwind)
cd frontend
npm install
npm run dev


📌 Frontend will run at:

http://localhost:5173

🔐 Environment Configuration
Database (MySQL)

Update application.properties in backend:

spring.datasource.url=jdbc:mysql://localhost:3306/vaultpay
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

📡 API Overview (Sample)

POST /api/auth/register → Register user

POST /api/auth/login → Login user

POST /api/wallet/add-balance → Add money

POST /api/wallet/transfer → Transfer money

🎯 Learning Outcomes

JWT based authentication

Service layer business logic

DTO vs Entity usage

Exception handling

Secure REST API design

Full-stack integration (React + Spring Boot)

👨‍💻 Author

Dev Sonone
GitHub: Dev-git-cpu

📌 Note

This project is built for learning and portfolio purposes and focuses on clean architecture and real-world use cases.
