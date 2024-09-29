const product=require('../Models/product.model');

exports.createProduct=async (req,res)=>{
    try {
        const products = await product.create(req.body);
        res.send(200).json(products);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }

      
}
exports.getAllProduct=async(req,res)=>{
    try{
    const products=await product.find({});
    res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message});
    }

}

exports.getProductById=async (req, res) => {
    try {
      const singleProduct = await product.findById(req.params.id);
      res.status(200).json(singleProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

exports.updateProduct=async (req,res)=>{
    try {
      const { id } = req.params;
      const products = await product.findByIdAndUpdate(id, req.body);
      if (!products) {
        return res.status(404).json({ message: 'Product is not Found' });
      }
      const updatedProduct = await product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  exports.deleteProduct=async (req,res)=>{
    try{
    const {id}=req.params;
    const delproduct=await product.findByIdAndDelete(id);
    res.status(200).json({ data:delproduct,message:"Product Deleted"});

    }catch(error){
        res.status(500).json({message:error.message});
    }
}

