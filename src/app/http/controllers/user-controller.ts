import { Request, Response } from 'express';

class UserController {
  constructor() {
  }

  hello = async (req: Request, res: Response) => {
    return res.status(200).send('I am UP !!!');
  }
}

export default UserController;
