const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Enter your product title!"],
        },
        description: {
            type: String,
            required: [true, "Enter your product description!"],
        },
        quantity: {
            type: String,
            required: [true, "Enter your product quantity!"],
        },
        price: {
            type: String,
            required: [true, "Enter your product price!"],
        },
        image: {
            type: String,
            required: [true, "Enter your product price!"],
        },

    },
    { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;