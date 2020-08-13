import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateFullChampionshipService from '@modules/championships/services/CreateFullChampionshipService';
import ListChampionshipService from '@modules/championships/services/ListChampionshipService';

export default class ChampionshipsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listChampionship = container.resolve(ListChampionshipService);

    const championship = await listChampionship.execute({
      user_id,
    });

    return response.json(championship);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name } = request.body;

    const createFullChampionship = container.resolve(
      CreateFullChampionshipService,
    );

    const championship = await createFullChampionship.execute({
      name,
      user_id,
    });

    return response.json(championship);
  }
}
