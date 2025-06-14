Mern - Notes + Chat Collaboration Tool

Tech Stack
Backend

Node.js - Runtime environment
Express.js - Web framework
MongoDB - Database
Mongoose - ODM for MongoDB
JWT - JSON Web Tokens for authentication
bcryptjs - Password hashing
cors - Cross-origin resource sharing
dotenv - Environment variables

Frontend

React - UI library
Vite - Build tool and dev server
Axios - HTTP client
React Icons - Icon library
React Toastify - Toast notifications
CSS3 - Custom styling with animations

 
Installation & Setup
1. Clone the Repository

2. Backend Setup
# Navigate to backend directory (if separate)
cd backend
# Install backend dependencies
npm install express cors mongoose dotenv bcryptjs jsonwebtoken
# Or if you have a package.json file
npm install

3. Frontend Setup
# Navigate to frontend directory
cd frontend
# Install frontend dependencies
npm install react react-dom axios react-icons react-toastify
# Install Vite and development dependencies
npm install -D vite @vitejs/plugin-react @tailwindcss/vite eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals

4. Environment Configuration
Backend Environment (.env)
Create a .env file in your backend root directory:
# MongoDB connection string
mongoURL=mongodb://localhost:27017/notes

# JWT Secret Key for token signing
JWT_SECRET=7f3d2b54eac1f8711d9046b6f3e9ac7684c9b3a12e7d44a6e6e5e382a9c10987


# Set environment (use 'production' in deployment)
NODE_ENV=development

# Optional: Server port (default 5000 if not set)
PORT=5000

Frontend Environment (.env)
Create a .env file in your frontend root directory:
# Backend API URL
VITE_API_URL=http://localhost:5000

5.Database Setup
Connect using MongoDB Compass:

Open MongoDB Compass
Use connection string: mongodb://localhost:27017
Click "Connect"
Your database notes will be created automatically when the app runs

6.Running the Application
 
Start Backend Server
# In backend directory
npm start
# The server will run on http://localhost:5000

Start Frontend Development Server
# In frontend directory
npm run dev
# The frontend will run on http://localhost:5173
