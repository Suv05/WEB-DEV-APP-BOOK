import mongoose from "mongoose";

const createConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Pinged your connection setup successfuly");
    })
    .catch((err) => {
      console.log("Error while connecting:", err);
    });
};

export default createConnection;
