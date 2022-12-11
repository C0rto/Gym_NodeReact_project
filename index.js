import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './api/server/db/connectDB.js';
import authRoute from './api/routes/auth.js';
import coursesRoute from './api/routes/courses.js';
import usersRoute from './api/routes/users.js';

// Basic Config
const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

// Connection to DB
connectDB();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/courses', coursesRoute);
app.use('/api/v1/users', usersRoute);

// Errors handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Listener
app.listen(PORT, () => {
  console.log(`Connected to backend on port http://localhost:${PORT}`);
});
