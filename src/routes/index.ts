import { Router, Request, Response } from 'express';
import city from './api/cities'

const routes = Router()

routes.get('/', (req:Request, res:Response) => {
  res.send('hello welcome to the project main router')
})

routes.use('/city', city)

export default routes
 