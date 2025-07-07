const express = require("express");
const { ProductCreate, GetSingleProduct, GetAllProducts } = require("../controllers/ProductController");
const router = express.Router();


router.post("/product-create", ProductCreate);
router.get("/product/:id", GetSingleProduct);
router.get("/products", GetAllProducts);

module.exports = router;