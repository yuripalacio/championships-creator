import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStageService from '@modules/stages/services/CreateStageService';

export default class StagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name } = request.body;

    const createStage = container.resolve(CreateStageService);

    const stage = await createStage.execute({ name, user_id });

    return response.json(stage);
  }
}
