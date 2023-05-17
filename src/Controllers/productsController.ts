import { bd } from "./../Instances/index"
import { Request,Response } from "express"
import { Products } from "../Models/Products"
import dotenv from 'dotenv'

dotenv.config()

export const  getProductsAll=async(req:Request,res:Response)=>{
  
     try{
        let productsList=await Products.findAll()
        res.json(productsList)
     }catch(e){
        res.json('aldo deu errado na requisição')
        console.log(e)
     }
  
}
export const  getProductId=async(req:Request,res:Response)=>{
    let {id}=req.params
    try{
        let productId=await Products.findByPk(id)
        if(productId){
            res.json(productId)
        }else{
            res.json({erro:'produto não existe'})
        }
     }catch(e){
        res.json('aldo deu errado na requisição')
        console.log(e)
     }
  
}
export const  postProduct=async(req:Request,res:Response)=>{
        let {name,description,price,category}=req.body
        let  image= req.file?.filename
     try{
         let newProduct=await Products.create({name, description,price,category,image })
            res.status(201)
            res.json({id:newProduct.id,newProduct})
        }catch(e){
            res.json(e)
        }


}
export const  updateProduct=async(req:Request,res:Response)=>{
        let {id}=req.params


        let {name,description,price}=req.body
        if(name !=='' && description !=='' && price !== 0  ){
            let productId=await Products.findByPk(id)
            if(productId){
                productId.name=name
                productId.description=description
                productId.price=price
                if (req.file) {
                    productId.image = req.file.filename;
                  }
                await productId.save()
                res.status(200).json(productId)
            }else{
                res.status(404).json({error:'produto não existe'})
            }
            
        }else{
            res.status(201).json({error:'algo deu errado'})
        }
    
}

export const  deleteProduct=async(req:Request,res:Response)=>{
        let {id}=req.params
        let productId=await Products.findByPk(id)
       if(productId){
        await Products.destroy({where:{id}})
        res.status(200).json({sucess:'produto deletado'})
       }else{
        res.status(404).json({erro:'produto já não existe'})
       }
}