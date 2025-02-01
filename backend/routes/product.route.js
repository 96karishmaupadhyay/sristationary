import express from 'express';
import { createProduct,getAllProduct,deleteProduct,getProductById,updateProduct } from "../controllers/product.controller.js";
import multer from 'multer';
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'/uploads')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage });

const router = express.Router();

// Routes
router.post('/products', upload.single('image'), createProduct); 
router.get('/products', getAllProduct);
router.get('/products/:id', getProductById);
router.put('/products/:id', upload.single('image'), updateProduct); 
router.delete('/products/:id', deleteProduct);

export default router;