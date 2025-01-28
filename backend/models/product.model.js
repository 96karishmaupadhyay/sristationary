import  { model, mongoose,Schema } from "mongoose";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const productModel= model("products_db",productSchema)
export default productModel;