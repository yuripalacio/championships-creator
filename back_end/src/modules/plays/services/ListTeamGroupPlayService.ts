import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPlayRepository from '@modules/plays/repositories/IPlaysRepository';

interface IRequest {
  stage_id: string;
  team_id: string;
}

@injectable()
class ListStageTeamScorePlayService {
  constructor(
    @inject('PlaysRepository')
    private playsRepository: IPlayRepository,
  ) {}

  public async execute({ stage_id, team_id }: IRequest): Promise<number[]> {
    const plays = await this.playsRepository.findByStageTeam(stage_id, team_id);

    if (!plays) {
      throw new AppError('Play does not found');
    }

    let totalRound = 0;
    let totalScore = 0;

    await Promise.all(
      plays.map(async play => {
        const round =
          play.team_1_id === team_id ? play.round_team_1 : play.round_team_2;
        const score = round === 16 ? 1 : 0;

        totalRound += round;
        totalScore += score;
      }),
    );

    return [totalRound, totalScore];
  }
}

export default ListStageTeamScorePlayService;
