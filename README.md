# TaskNexus - Frontend Developer Intern Task

This repository contains the submission for the **Frontend Developer Intern** assignment. It is a scalable web application featuring authentication, a dashboard, and full CRUD functionality, built with the MERN stack.


## Deliverables Checklist

1.  **Frontend + Basic Backend Code:**

    * **Frontend:** React.js (Vite) + Tailwind CSS.
    * **Backend:** Node.js + Express.js.
    * **Database:** MongoDB.

2.  **Functional Authentication:**

    * Implemented User Registration & Login using **JWT (JSON Web Tokens)**.
    * Secure logout functionality included

3.  **Dashboard with CRUD Entity:**

    * **Dashboard:** Displays user profile and task statistics
    * **CRUD Operations:** Users can Create, Read, Update, and Delete tasks dynamically
    * **Search:** Integrated search bar to filter tasks

4. **API Documentation**

    **Base URL:** `http://localhost:5000/api`

    | Method | Endpoint         | Description |
    | :---   | :---             | :--- |
    | POST   | `/auth/register` | Register a new user |
    | POST   | `/auth/login`    | Login and receive JWT |
    | GET    | `/tasks`         | Get all tasks for logged user |
    | POST   | `/tasks`         | Create a new task |
    | PUT    | `/tasks/:id`     | Update task status |
    | DELETE | `/tasks/:id`     | Delete a task |

5.  **Scalability Note:**

    * A detailed strategy for scaling the frontend-backend integration is included at the bottom of this file

## Tech Stack

* **Frontend:** React.js, Tailwind CSS, Lucide React (Icons).
* **Backend:** Node.js, Express.js, CORS, Dotenv.
* **Security:** Bcrypt (Password Hashing), JWT (Authentication)
* **Database:** MongoDB Atlas.


## 🚀 How to Run Locally

### 1. Setup Backend
```bash
cd backend
npm install
# Create a .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
npm start

#### 2.Setup Frontend
```bash
cd frontend
npm install
npm run dev



