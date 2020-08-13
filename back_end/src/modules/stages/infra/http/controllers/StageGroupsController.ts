import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListStageGroupsService from '@modules/stages/services/ListStageGroupsService';

export default class StageGroupsControlle {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listStageGroups = container.resolve(ListStageGroupsService);

    const stageGroups = await listStageGroups.execute({
      user_id,
      stage_name: 'Grupo',
    });

    return response.json(classToClass(stageGroups));
  }
}
