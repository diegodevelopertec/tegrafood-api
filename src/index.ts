import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import Routes from './Routes'
import path from 'path'
import cors from 'cors'
import { Request,Response } from 'express'


dotenv.config()
const api=express()
api.use('/uploads',express.static(path.join(__dirname,'../public/')));
//express.static('public/')

api.use(cors({origin:'*'}))
api.use(express.urlencoded({extended:true}))
api.use(express.static(path.join(__dirname,'../public/')))
api.use(Routes)
api.use('',(req:Request,res:Response)=>{
    res.send(`Bem Vindo á api TegraFood.Aqui você poderá acessar os seguintes eadpoints:
    <ul>
        <li>GET <i>products</i></li>
        <li>GET <i>products/:id</i></li>
        <li>POST  <i>products</i></li>
        <li>UPDATE  <i>products/:id</i></li>
        <li>DELETE  <i>products/:id</i></li>
    </ul>
    `)
})
api.listen(process.env.PORT,()=>console.log(`servidor rodando em http://localhost:${process.env.PORT}`) )