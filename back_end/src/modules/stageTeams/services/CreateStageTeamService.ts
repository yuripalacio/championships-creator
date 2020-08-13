import { injectable, inject } from 'tsyringe';

import IStageTeamRepository from '@modules/stageTeams/repositories/IStageTeamsRepository';
import StageTeam from '../infra/typeorm/entities/StageTeam';

interface IRequest {
  stage_id: string;
  team_id: string;
  score?: number;
  round?: number;
  user_id: string;
}

@injectable()
class CreateStageTeamService {
  constructor(
    @inject('StageTeamsRepository')
    private stageTeamsRepository: IStageTeamRepository,
  ) {}

  public async execute({
    stage_id,
    team_id,
    user_id,
  }: IRequest): Promise<StageTeam> {
    const stageTeam = await this.stageTeamsRepository.create({
      stage_id,
      team_id,
      user_id,
    });

    return stageTeam;
  }
}

export default CreateStageTeamService;
