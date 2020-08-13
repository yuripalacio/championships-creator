import { injectable, inject } from 'tsyringe';

import IPlayRepository from '@modules/plays/repositories/IPlaysRepository';
import Play from '../infra/typeorm/entities/Play';

interface IRequest {
  stage_id: string;
  team_1_id: string;
  team_2_id: string;
  user_id: string;
}

@injectable()
class CreatePlayService {
  constructor(
    @inject('PlaysRepository')
    private playsRepository: IPlayRepository,
  ) {}

  public async execute({
    stage_id,
    team_1_id,
    team_2_id,
    user_id,
  }: IRequest): Promise<Play> {
    const round_team_1 = Math.floor(Math.random() * 17);
    const round_team_2 =
      round_team_1 < 16 ? 16 : Math.floor(Math.random() * 16);

    const play = await this.playsRepository.create({
      stage_id,
      team_1_id,
      team_2_id,
      round_team_1,
      round_team_2,
      user_id,
    });

    return play;
  }
}

export default CreatePlayService;
