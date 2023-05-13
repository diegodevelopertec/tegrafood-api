import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import Routes from './Routes'


dotenv.config()
const api=express()
api.use(express.urlencoded({extended:true}))
api.use(Routes)
api.listen(process.env.PORT)