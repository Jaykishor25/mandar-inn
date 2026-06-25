// 📂 server/index.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import paymentRoutes from './routes/payment.js';

// Environment variables (.env file) ko load karne ke liye
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. BODY PARSER MIDDLEWARE
app.use(express.json());

// 2. SECURE CORS CONFIGURATION
// Localhost aur Live Production Domain dono ko automatic handle karega
app.use(cors({
  origin: [process.env.CLIENT_URL, "http://localhost:5173", "https://mandar-inn.vercel.app"],
  credentials: true
}));

// 3. APPLICATION API ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

// 4. BASE HEALTH CHECK ROUTE
app.get('/', (req, res) => {
  res.send("Mandar Inn Full-Stack API Server is online and production-ready.");
});

// 5. GLOBAL ERROR HANDLER (Server crash hone se bachata hai)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

// 6. REAL MONGOOSE DATABASE CONNECTION & SERVER START
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("📁 Cloud MongoDB Atlas connected seamlessly via secure credentials.");
    app.listen(PORT, () => console.log(`🚀 Production Server live on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Database Connection Interrupted:", err.message);
  });