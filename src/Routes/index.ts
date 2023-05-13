import { Router } from "express";
import * as ProductController from './../Controllers/productsController'

const Routes=Router()
Routes.get('/products',ProductController.getProductsAll)
Routes.post('/products',ProductController.postProduct)
Routes.get('/products/:id',ProductController.getProductId)
Routes.put('/products/:id',ProductController.updateProduct)
Routes.delete('/products/:id',ProductController.deleteProduct)



export default Routes