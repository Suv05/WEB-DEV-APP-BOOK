import express from "express";
import dotenv from "dotenv";
import auth from "./Middleware/authorization.js";

//router setup
import authRouter from "./routes/auth.route.js";
import jobsRouter from "./routes/jobs.route.js";

//error handling
import { errorHandler } from "./Middleware/errorHandeler.js";
import NotFoundError from "./Errors/NotFoundError.js";

//connection setup
import createConnection from "./DB/connect.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", auth, jobsRouter);

app.use((req, res, next) => {
  console.log("404 middleware triggered");
  next(new NotFoundError("The requested resource was not found"));
});

app.use(errorHandler);

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
    process.exit(1);
  });
