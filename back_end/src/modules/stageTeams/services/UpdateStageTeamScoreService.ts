import { injectable, inject, container } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import ListTeamGroupPlayService from '@modules/plays/services/ListTeamGroupPlayService';
import IStageTeamRepository from '../repositories/IStageTeamsRepository';

interface IRequest {
  stage_id: string;
  team_id: string;
  score: number;
  round: number;
}

@injectable()
class UpdateStageTeamScoreService {
  constructor(
    @inject('StageTeamsRepository')
    private stageTeamsRepository: IStageTeamRepository,
  ) {}

  public async execute(): Promise<void> {
    const stage_teams = await this.stageTeamsRepository.findStageTeamOutdated();
    const listTeamGroupPlay = container.resolve(ListTeamGroupPlayService);

    await Promise.all(
      stage_teams.map(async stage_team => {
        const teamScore = await listTeamGroupPlay.execute({
          stage_id: stage_team.stage_id,
          team_id: stage_team.team_id,
        });

        const stageTeam = stage_team;

        stageTeam.round += teamScore[0];
        stageTeam.score += teamScore[1];

        await this.stageTeamsRepository.save(stageTeam);
      }),
    );
  }
}

export default UpdateStageTeamScoreService;
