import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import Routes from './Routes'
import path from 'path'
import cors from 'cors'



dotenv.config()
const api=express()
api.use('/uploads', express.static('uploads'));
api.use(cors({origin:'*'}))
api.use(express.urlencoded({extended:true}))
api.use(express.static(path.join(__dirname,'../public')))
api.use(Routes)
api.listen(process.env.PORT)