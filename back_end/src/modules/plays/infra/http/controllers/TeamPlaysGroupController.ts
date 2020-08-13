import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListTeamPlaysGroupService from '@modules/plays/services/ListTeamPlaysGroupService';

export default class TeamPlaysGroupController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { stage_name } = request.query;

    const listTeamPlaysGroup = container.resolve(ListTeamPlaysGroupService);

    const plays = await listTeamPlaysGroup.show({
      user_id,
      stage_name,
    });

    return response.json(plays);
  }
}
