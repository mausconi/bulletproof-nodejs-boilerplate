import { Request, Response } from 'express';
import { User } from '../../models/user';

class UserController {
  constructor() {
  }

  index = async (req: Request, res: Response) => {
    const users = await User.query();
    return res.status(200).json(users);
  }

  show = async (req: Request, res: Response) => {
    const user = await User.query().findById(req.params.id);
    return res.status(200).json(user);
  }
}

export default UserController;
