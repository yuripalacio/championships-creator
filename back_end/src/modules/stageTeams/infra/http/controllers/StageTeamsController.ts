import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStageTeamService from '@modules/stageTeams/services/CreateStageTeamService';

export default class StagesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { stage_id, team_id } = request.query;

    const createStageTeam = container.resolve(CreateStageTeamService);

    const stage = await createStageTeam.execute({ stage_id, team_id, user_id });

    return response.json(stage);
  }
}
