import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductList from "../models/Product.model.js";
import items from "./products.json" assert { type: "json" };

dotenv.config();

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const uri = process.env.MONGO_URI;
const insertCollection = async (uri) => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Clean existing data from the database
    await ProductList.deleteMany({});

    // Insert data to the database
    await ProductList.insertMany(items);

    console.log("Successfully inserted");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error; // Re-throw the error to handle it in the app.js
  } finally {
    // Close the connection after inserting data
    mongoose.connection.close();
  }
};

insertCollection(uri);
