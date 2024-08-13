import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProductListSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, " Product name must be provided "],
    },
    price: {
      type: Number,
      required: [true, "product price must be provided"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    company: {
      type: String,
      enum: {
        values: ["ikea", "liddy", "caressa", "marcos"],
        message: "{VALUE} is not supported",
      },
      // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
    },
  },
  { timestamps: true } // Enable timestamps
);

const ProductList = model("Productlist", ProductListSchema);

export default ProductList;