import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStageRepository from '@modules/stages/repositories/IStagesRepository';

interface IRequest {
  user_id: string;
  stage_name: string;
}

@injectable()
class ListStageGroupsService {
  constructor(
    @inject('StagesRepository')
    private stagesRepository: IStageRepository,
  ) {}

  public async execute({ user_id, stage_name }: IRequest): Promise<string[]> {
    const stages = await this.stagesRepository.findStageTeam(
      user_id,
      stage_name,
    );

    if (!stages) {
      throw new AppError('Stage name does not exists');
    }

    return stages;
  }
}

export default ListStageGroupsService;
