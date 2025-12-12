-++ Todo App – MERN Stack ++-
--Live Demo
Frontend: https://todo-appmern1.netlify.app
Backend API: https://todo-app-backend-3jo7.onrender.com

--Installation
Clone the repository: git clone <your-repository-url>
Install packages for both frontend and backend: 
cd frontend
npm install

cd backend
npm install

--Configuration

Create a file named .env inside the backend directory and add:
MONGO_URI=Your MongoDB connection string
GMAIL_USERNAME=your gmail address
GMAIL_PASSWORD=your google app password
JWT_SECRET=a random secret key
PORT=8001
FRONTEND_URL=https://todo-appmern1.netlify.app

--Run the App (Locally)

-Start backend:
cd backend
npm start

-Start frontend:
cd frontend
npm start

--API Base URL
The frontend communicates with the backend using:
https://todo-app-backend-3jo7.onrender.com/api

+Tech Stack+
MongoDB – Database
Express.js – Backend
React.js – Frontend
Node.js – Server
JWT Authentication
Nodemailer (Forgot password emails)

+Features+
User Registration & Login
JWT Authentication
Add, Delete & Mark Tasks Completed
Forgot Password (Email reset link)
Fully responsive UI
Deployed Frontend (Netlify)
Deployed Backend (Render)
