import { Router } from "express";
import * as ProductController from './../Controllers/productsController'
import multer, { Multer } from 'multer';
import path, { dirname } from 'path';



const storageConfig=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
})

export const upload: Multer = multer({ storage: storageConfig })


const Routes=Router()
Routes.get('/products',ProductController.getProductsAll)
Routes.post('/products',upload.single('image'),ProductController.postProduct)
Routes.get('/products/:id',ProductController.getProductId)
Routes.put('/products/:id',upload.single('image'),ProductController.updateProduct)
Routes.delete('/products/:id',ProductController.deleteProduct)



export default Routes