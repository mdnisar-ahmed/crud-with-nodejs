const mongoose=require("mongoose");

const ProductSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:["true","Please, this is required"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String
        }
    },
    {
        timestamps:true,
    }
);

const Product=mongoose.model("Product",ProductSchema);
module.exports=Product;