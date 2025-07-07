

const express = require("express");
const { ProductCreate, GetSingleProduct, GetAllProducs } = require("../controllers/ProductController");
const router = express.Router();


router.post("/create", ProductCreate);
router.get("/find/:id", GetSingleProduct);
router.get("/find", GetAllProducs);

module.exports = router;