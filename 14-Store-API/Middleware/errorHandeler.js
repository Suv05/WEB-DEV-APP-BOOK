export const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong!";
  
    // Check if the error is a Mongoose validation error
    if (err.name === "ValidationError") {
      statusCode = 400;
      const errors = Object.values(err.errors).map((el) => el.message);
      message = `Validation Error: ${errors.join(", ")}`;
    }
  
    res.status(statusCode).json({
      status: "error",
      message: message,
    });
  };
  