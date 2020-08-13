import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { uuid } from 'uuidv4';

import CreateTeamService from '@modules/teams/services/CreateTeamService';

export default class TeamsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const avatar = `https://robohash.org/${uuid()}`;
    const { name, championship_id } = request.body;

    const createTeam = container.resolve(CreateTeamService);

    const team = await createTeam.execute({
      name,
      avatar,
      championship_id,
      user_id,
    });

    return response.json(team);
  }
}
