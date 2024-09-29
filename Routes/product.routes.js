const express=require('express');
const router =express.Router();
const {createProduct,getAllProduct, updateProduct, getProductById, deleteProduct}=require('../Controller/product.controller');

// router.post('/',createProduct);
// router.get('/',getAllProduct);
// router.get('/:id',getProductById)
// router.put('/:id',updateProduct);
// router.delete('/:id',deleteProduct);
router.route("/").get(getAllProduct).post(createProduct);
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports=router;