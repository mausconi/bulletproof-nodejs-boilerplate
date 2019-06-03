import { Request, Response } from 'express';
import UserController from '../controllers/user-controller';

const userController = new UserController();

export default [
  {
    path: '/users',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        await userController.hello(req, res);
      },
    ],
  },
];
