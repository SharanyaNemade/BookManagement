# BookManagement
Design and develop a full-stack web application for managing books using React.js for the frontend and Spring Boot for the backend. The system should allow users to register, log in, and perform CRUD (Create, Read, Update, Delete) operations on a collection of books.




# 📚 Book Management Application

A **full-stack web application** for managing books, built with **React.js** (frontend) and **Spring Boot** (backend).  
This system allows users to **register, log in, and perform CRUD operations** (Create, Read, Update, Delete) on a collection of books.  

---

## 🚀 Features

### 🔐 User Authentication
- **Register**: Create an account with username, email, and password.  
- **Login**: Secure login with username and password.  
- **Logout**: Clear user session and log out safely.  
- **Password Security**: Backend uses password hashing and validation.  

### 📖 Book Management
- **Add Book**: Authenticated users can add books with details (title, author, publication date, genre, description).  
- **View Books**: Browse all books in a paginated list.  
- **View Book Details**: Click on a book to view complete details.  
- **Update Book**: Edit details of books added by the user.  
- **Delete Book**: Remove books added by the user.  

---

## 🖥️ Frontend (React.js)

📂 **Folder Structure (Key Files)**  


src/
├─ assets/
├─ components/
│ ├─ BookDetails.jsx
│ ├─ BookForm.jsx
│ ├─ BookList.jsx
│ ├─ Login.jsx
│ ├─ Navbar.jsx
│ └─ Register.jsx
│
├─ context/
│ ├─ AuthContext.jsx
│ └─ BookContext.jsx
│
├─ pages/
│ ├─ AddBookPage.jsx
│ ├─ EditBookPage.jsx
│ ├─ HomePage.jsx
│ ├─ LoginPage.jsx
│ └─ RegisterPage.jsx
│
├─ utils/
│ └─ api.js
│
├─ App.jsx
├─ App.css
├─ index.css
└─ main.jsx






✅ **Frontend Features**
- Built with **React.js + Vite** for fast development.  
- **React Router** for navigation.  
- **React Context API** for state management (authentication + book data).  
- **Form validation** for inputs.  
- **Responsive UI** with error handling and notifications.  

---

## ⚙️ Backend (Spring Boot)

📂 **Folder Structure (Key Files)**  




src/main/java/com/example/bookapp/
├─ BookappApplication.java
├─ config/
│ ├─ CorsConfig.java
│ └─ SecurityConfig.java
├─ controller/
│ ├─ AuthController.java
│ └─ BookController.java
├─ entity/
│ ├─ Book.java
│ └─ User.java
├─ repository/
│ ├─ BookRepository.java
│ └─ UserRepository.java
└─ service/
├─ BookService.java
└─ UserService.java






✅ **Backend Features**
- **Spring Boot RESTful API** for all logic.  
- **User & Book models** with proper relationships.  
- **API Endpoints**:  
  - `POST /api/auth/register` → Register new users  
  - `POST /api/auth/login` → Login  
  - `GET /api/books` → Get all books  
  - `GET /api/books/{id}` → Get book details  
  - `POST /api/books` → Add new book  
  - `PUT /api/books/{id}` → Update book  
  - `DELETE /api/books/{id}` → Delete book  
- **Spring Security + JWT** (if implemented).  
- **MySQL Database Integration**.  

---

## 🛢️ Database (MySQL)

- Stores **users** and **books** with a **One-to-Many relationship** (one user can add many books).  
- Example schema:  
  - **User**: `id, username, email, password`  
  - **Book**: `id, title, author, publication_date, genre, description, user_id`  

---

## 🛠️ Tech Stack

### Frontend:
- React.js  
- React Router  
- Context API  
- Axios  

### Backend:
- Spring Boot  
- Spring Security  
- JPA / Hibernate  
- MySQL  

---

## ▶️ Getting Started

### Prerequisites
- Node.js & npm  
- Java 17+  
- MySQL  

### Frontend Setup
```bash
cd book-app-frontend
npm install
npm run dev



Backend Setup
cd bookapp
mvn spring-boot:run




Database Setup

Create a MySQL database:
CREATE DATABASE bookapp;


Update application.properties with your DB credentials.

📌 Future Enhancements
JWT-based authentication for better security.
Role-based access control (Admin/User).
Book search & filter options.
Docker support for deployment.





🤝 Contributing
Pull requests are welcome! Please fork the repository and create a new branch for your feature or bugfix.



📄 License
This project is licensed under the MIT License.



👨‍💻 Author
Developed by Sharanya Nemade 🚀
