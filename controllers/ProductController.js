const ProductModel = require("../models/ProductModel");



exports.ProductCreate = async (req, res) => {
    try {
        const productItem = await ProductModel(req.body);
        const product = await productItem.save();
        if (!product) {
            return res.status(400).json({ status: "fail", data: "Product create fail" });
        }
        res.status(201).json({ status: "success", data: product });

    } catch (error) {
        return res.status(400).json({ status: "fail", data: error.toString() });
    }

}

exports.GetSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await ProductModel.findById({id})
        if (!product) {
            return res.status(400).json({ status: "fail", data: `${id} product not found` });
        }
        res.status(200).json({ status: "success", data: product });

    } catch (error) {
        return res.status(400).json({ status: "fail", data: error.toString() });
    }

}

exports.GetAllProducs = async (req, res) => {
    try {
        const products = await ProductModel.find();
        if (!products) {
            return res.status(400).json({ status: "fail", data: "Product not found" });
        }
        res.status(200).json({ status: "success", data: products });

    } catch (error) {
        return res.status(400).json({ status: "fail", data: error.toString() });
    }

}