import { Request, Response } from 'express';


interface ICicade {
  nome: string;
}


export const create = (req: Request<{}, {}, ICicade>, res:Response) =>{

  console.log(req.body);
  
  return res.send('Create');
};