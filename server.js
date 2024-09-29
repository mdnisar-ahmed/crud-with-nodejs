const express = require('express');
const cors = require('cors');
// const router=require('router');
const mongoose = require('mongoose');
const product = require('./Models/product.model');
const productRoute=require('./Routes/product.routes');
const {createProduct,getAllProduct, getProductById, deleteProduct, updateProduct}=require('./Controller/product.controller');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.listen(3000);


//routes
app.use('/api/product',productRoute);

//Connection with the Database
mongoose
  .connect(
    'mongodb+srv://admin:13TUdekhs@backenddb.xs7qg.mongodb.net/?retryWrites=true&w=majority&appName=BackEndDB'
  )
  .then(() => {
    console.log('Hii,this is connected!!');
  })
  .catch(() => {
    console.log('DB is not connected!!');
  });

  
//get request with the i/p as id to fetch the request
app.get('/',getProductById); 

//to get all the products with this GET request
app.get('/', getAllProduct);

//to POST the product through this api in Product table
app.post('/', createProduct);

//to UPDATE the Product
app.put('/',updateProduct); 

//to delete the product
app.delete('/', deleteProduct);

const post_route = require('./Routes/postRoutes');
// const Product = require('./Models/product.model');
app.use('/api', post_route);
