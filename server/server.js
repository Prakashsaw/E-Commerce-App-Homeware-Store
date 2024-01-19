import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


//PORT
const PORT = process.env.PORT || 8080;

//it is a test route just to see our server is working
app.get("/", (req, res) => {
  return res.send(`<div style = "background:aqua;padding:100px;"><h2>Welcome to Expense Management System Backend Server URL...</h2>
    <p>Below are the some examples of supported routes...</p>
        <div><ul>
            <h3>User Route / Auth Route</h3>
            <li>Register User - /api/v1/auth/register</li>
            <li>Login User - /api/v1/auth/login</li>
            <li>Forgot Password - /api/v1/auth/forgot-password</li>
            <li>Test - /api/v1/auth/test</li>
            
            <h3>category Route</h3>
            <li>Category Route - /api/v1/category</li>

            <h3>Products Route </h3>
            <li>Products Route- /api/v1/product</li>

            <li>Much more...</li>
        </ul></div>
    </div>`);
});

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});


