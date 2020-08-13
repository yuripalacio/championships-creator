import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStageTeamsRepository from '@modules/stageTeams/repositories/IStageTeamsRepository';

interface IRequest {
  user_id: string;
  stage_id: string;
}

@injectable()
class ListStageTeamGroupsService {
  constructor(
    @inject('StageTeamsRepository')
    private stageTeamRepository: IStageTeamsRepository,
  ) {}

  public async show({ user_id, stage_id }: IRequest): Promise<string[]> {
    const stages = await this.stageTeamRepository.findStageGroupTeam(
      user_id,
      stage_id,
    );

    if (!stages) {
      throw new AppError('Stage name does not exists');
    }

    return stages;
  }
}

export default ListStageTeamGroupsService;
