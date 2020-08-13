import { injectable, inject } from 'tsyringe';

import IStageTeamRepository from '@modules/stageTeams/repositories/IStageTeamsRepository';
import IStageRepository from '@modules/stages/repositories/IStagesRepository';

interface IRequest {
  name: string;
  numberOfRankedTeams: number;
  user_id: string;
}

@injectable()
class ListStageTeamPlayoffService {
  constructor(
    @inject('StageTeamsRepository')
    private stageTeamsRepository: IStageTeamRepository,

    @inject('StagesRepository')
    private stagesRepository: IStageRepository,
  ) {}

  public async execute({
    name,
    numberOfRankedTeams,
    user_id,
  }: IRequest): Promise<string[]> {
    const stages = await this.stagesRepository.findByName(name, user_id);
    const teams = [];

    await Promise.all(
      stages.map(async stage => {
        const rankedTeam = await this.stageTeamsRepository.findRankedTeams(
          stage.id,
          numberOfRankedTeams,
        );

        teams.push(rankedTeam);
      }),
    );

    return teams;
  }
}

export default ListStageTeamPlayoffService;
