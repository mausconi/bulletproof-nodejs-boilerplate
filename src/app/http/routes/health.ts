import { Request, Response } from 'express';
import HealthController from '../controllers/health-controller';

const healthController = new HealthController();

export default [
  {
    path: '/health',
    method: 'get',
    handler: [
      async (req: Request, res: Response) => {
        await healthController.hello(req, res);
      },
    ],
  },
];
