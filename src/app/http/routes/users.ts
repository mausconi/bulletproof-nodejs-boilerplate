import { Request, Response } from 'express';
import UserController from '../controllers/user-controller';

const userController = new UserController();

export default [
  {
    path: '/users',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        await userController.index(req, res);
      },
    ],
  },
  {
    path: '/users/:id',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        await userController.show(req, res);
      },
    ],
  },
];
