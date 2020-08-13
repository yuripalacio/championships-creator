import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ITeamRepository from '@modules/teams/repositories/ITeamsRepository';
import Team from '../infra/typeorm/entities/Team';

interface IRequest {
  name: string;
  avatar?: string;
  championship_id: string;
  user_id: string;
}

@injectable()
class CreateTeamService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamRepository,
  ) {}

  public async execute({
    name,
    championship_id,
    user_id,
  }: IRequest): Promise<Team> {
    const findByName = await this.teamsRepository.findByName(
      name,
      championship_id,
    );

    if (findByName) {
      throw new AppError('This name already exists');
    }

    const team = await this.teamsRepository.create({
      name,
      championship_id,
      user_id,
    });

    return team;
  }
}

export default CreateTeamService;
