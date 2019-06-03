import { Request, Response } from 'express';

class UserController {
  constructor() {
  }

  hello = async (req: Request, res: Response) => {
    const user = {
      name: 'myFullName',
      age: 30,
      company: 'IBM',
    };
    return res.status(200).send(JSON.stringify(user));
  }
}

export default UserController;
