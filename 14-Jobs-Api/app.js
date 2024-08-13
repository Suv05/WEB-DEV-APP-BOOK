import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/products.route.js";
import createConnection from "./DB/connect.js";
import { errorHandler } from "./Middleware/errorHandeler.js";
import NotFoundError from "./Error/NotFoundError.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// To parse JSON data
app.use(express.json());
// To parse URL-encoded data (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));

// Use the products router
app.use("/api/v1", productsRouter);

// Handle 404 errors
app.use((req, res, next) => {
  next(new NotFoundError("The requested resource was not found"));
});

//error handeler middleware
app.use(errorHandler);

//connncetion to database
createConnection(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start the server due to MongoDB connection error:",
      error
    );
    process.exit(1); // Exit the process with a failure code
  });
