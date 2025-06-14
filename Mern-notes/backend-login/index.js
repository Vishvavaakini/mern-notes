import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';  
import authRouter from './routes/auth.js'; 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend is working!', 
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'MERN Auth Backend Server is running!' });
});
 
app.use('/api/auth', authRouter);

 
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

 
app.use('*', (req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});
 
connectDB();

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(` API available at: http://localhost:${PORT}`);
  console.log(` Test endpoint: http://localhost:${PORT}/api/test`);
});
