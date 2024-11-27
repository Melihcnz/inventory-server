import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
// ROUTES IMPORTS
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
// CONFIGURATIONS
dotenv.config()
const app = express()
// MIDDLEWARES
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
app.use("/dashboard", dashboardRoutes) //http://localhost:8000/dashboard
app.use("/products", productRoutes) //http://localhost:8000/products
// SERVER SETUP
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
