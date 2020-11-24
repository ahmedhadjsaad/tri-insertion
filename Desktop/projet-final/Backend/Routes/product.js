const express = require("express");
const { addProducts, findProducts } = require("../controllers/product.contoller");
const Products = require("../model/Products");

const Router = express.Router();

Router.post('/', addProducts )

Router.get(`/`, findProducts)

module.exports = Router;
