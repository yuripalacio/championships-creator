import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePlayService from '@modules/plays/services/CreatePlayService';

export default class PlaysController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { stage_id, team_1_id, team_2_id } = request.body;

    const createPlay = container.resolve(CreatePlayService);

    const play = await createPlay.execute({
      stage_id,
      team_1_id,
      team_2_id,
      user_id,
    });

    return response.json(play);
  }
}
