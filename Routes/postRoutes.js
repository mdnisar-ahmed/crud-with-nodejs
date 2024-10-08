const express=require('express');
const router=express.Router();
const post_route=express();

const bodyParser=require('body-parser');
post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({extended:true}));

const multer=require('multer');
const path=require('path');

post_route.use(express.static('Public'));

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(_dirname,'../public/postImages'),function(error,sucess){
            if(error){
                console.log(error);
            }
        });
    },
    filename:function(req,file,cb){
        const name=Date.now()+'-'+file.originalname;
        cb(null,name,function(error,sucess){
            if(error){
                console.log(error);
            }
        });
    }
});

const upload=multer({storage:storage});

// const postController=require('../Controller/postController');
// post_route.post('./create-post',postController.createPost);

module.exports=post_route;

