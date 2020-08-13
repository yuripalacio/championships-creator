import { container, injectable, inject } from 'tsyringe';

import GenerateCombinations from '@shared/util/GenerateCombinations';

import IPlaysRepository from '@modules/plays/repositories/IPlaysRepository';

import CreatePlayService from './CreatePlayService';

interface IRequest {
  stage_id: string;
  stage_teams: string[];
  user_id: string;
}

@injectable()
class CreateChampionshipPlayService {
  constructor(
    @inject('PlaysRepository')
    private playsRepository: IPlaysRepository,
  ) {}

  public async execute({
    stage_id,
    stage_teams,
    user_id,
  }: IRequest): Promise<void> {
    const plays = GenerateCombinations({ items: stage_teams });
    const teamPlays = [];

    const createPlay = container.resolve(CreatePlayService);

    for (let index = 0; index < plays.length; index += 1) {
      teamPlays.push(
        createPlay.execute({
          stage_id,
          team_1_id: plays[index][0],
          team_2_id: plays[index][1],
          user_id,
        }),
      );
    }

    await Promise.all(teamPlays);
  }
}

export default CreateChampionshipPlayService;
