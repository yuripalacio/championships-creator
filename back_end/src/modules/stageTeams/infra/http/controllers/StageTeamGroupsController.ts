import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListStageTeamGroupsService from '@modules/stageTeams/services/ListStageTeamGroupsService';

export default class StagesTeamGroupsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { stage_id } = request.query;

    const listStageTeamGroups = container.resolve(ListStageTeamGroupsService);

    const stage = await listStageTeamGroups.show({ stage_id, user_id });

    return response.json(stage);
  }
}
