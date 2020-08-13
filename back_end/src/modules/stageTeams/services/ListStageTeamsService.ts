import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStageTeamRepository from '@modules/stageTeams/repositories/IStageTeamsRepository';

interface IRequest {
  stage_id: string;
}

@injectable()
class ListStageTeamsService {
  constructor(
    @inject('StageTeamsRepository')
    private stagesRepository: IStageTeamRepository,
  ) {}

  public async execute({ stage_id }: IRequest): Promise<string[]> {
    const stage_teams = await this.stagesRepository.findByStage(stage_id);

    if (!stage_teams) {
      throw new AppError('Stage does not have a team');
    }

    const teams = [];

    await Promise.all(
      stage_teams.map(async stage_team => {
        teams.push(stage_team.team_id);
      }),
    );

    return teams;
  }
}

export default ListStageTeamsService;
