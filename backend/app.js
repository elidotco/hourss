const express = require("express");
const connectDB = require("./config/db");
const cors = require("./config/cors");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
connectDB();

app.use(express.json());
app.use(cors);

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
// Add more routes as needed

app.use(errorHandler); // Custom error handling middleware

module.exports = app;
