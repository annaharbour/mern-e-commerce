import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
export const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc Fetch a product
// @route GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: 'Product not found'})
        throw new Error('Product not found')
    }
});
