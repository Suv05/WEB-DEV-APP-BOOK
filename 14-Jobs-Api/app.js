import express from "express";
import dotenv from "dotenv";

//router setup
import authRouter from "./routes/auth.route.js";
import jobsRouter from "./routes/jobs.route.js";

//error handeling
import { errorHandler } from "./Middleware/errorHandeler.js";
import NotFoundError from "./Errors/NotFoundError.js";

//connection setup
import createConnection from "./DB/connect.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// To parse JSON data
app.use(express.json());
// To parse URL-encoded data (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));

// Use the jobs  and auth router
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/auth", authRouter);

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
