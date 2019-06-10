import {Request, Response} from 'express';
import {User} from '../../models/user';
import {HTTP404Error} from '../../lib/http-client-errors';

class UserController {
  constructor() {
  }

  index = async (req: Request, res: Response) => {
    try {
      const users = await User.query();
      return res.status(200).json(users);
    } catch (error) {
      throw new HTTP404Error(`Users Not Found${error.toString()}`);
    }
  }

  show = async (req: Request, res: Response) => {
    try {
      const user = await User.query().findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      throw new HTTP404Error(`User Not Found${error.toString()}`);
    }
  }
}

export default UserController;
