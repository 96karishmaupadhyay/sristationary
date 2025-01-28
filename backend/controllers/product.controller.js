import productModel from "../models/product.model.js";
export const createProduct=async(req,res)=>{
   try {
     const {name,price,stock}=req.body;
    const image=req.file?req.file.path:"";
    if (!image) {
        return res.status(400).json({ message: 'Image is required!' });
      }
    const newProduct=new productModel({name,price,stock,image});
    const saveProduct=await newProduct.save();
    res.status(201).json({message:"Product created succesfully",product:saveProduct})
   } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create product' });
   }
}
export const getAllProduct=async(req,res)=>{
    try {
        const products=await productModel.find();
        res.status(200).json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}
export const getProductById=async(req,res)=>{
    try {
        const {id}=req.params;
       const product=await productModel.findById(id);
       if(!product){
        return res.status(404).json({ message: 'Product not found' });
       }
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}
export const updateProduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const { name, price, stock } = req.body;
    const image = req.file ? req.file.path : '';
       const updatedroduct=await productModel.findByIdAndUpdate(id, { name, price, stock, image },
        { new: true });
       if(!updatedroduct){
        return res.status(404).json({ message: 'Product not found' });
       }
       res.status(200).json(updatedroduct)
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProduct = await productModel.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete product' });
    }
  };