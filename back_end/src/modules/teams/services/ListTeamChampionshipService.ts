import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamRepository from '@modules/teams/repositories/ITeamsRepository';
import Team from '../infra/typeorm/entities/Team';

interface IRequest {
  championship_id: string;
}

@injectable()
class ListChampionshipService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamRepository,
  ) {}

  public async execute({ championship_id }: IRequest): Promise<Team[]> {
    const teams = await this.teamsRepository.findByChampionship(
      championship_id,
    );

    if (!teams) {
      throw new AppError('Championship has no teams');
    }

    return teams;
  }
}

export default ListChampionshipService;
