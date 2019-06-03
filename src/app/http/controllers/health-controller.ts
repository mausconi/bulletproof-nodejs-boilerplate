import { Request, Response } from 'express';

class HealthController {
  constructor() {
  }

  hello = async (req: Request, res: Response) => {
    return res.status(200).send('I am UP !!!');
  }
}

export default HealthController;
