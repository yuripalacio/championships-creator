import { getRepository, Repository } from 'typeorm';

import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import ICreateTeamDTO from '@modules/teams/dtos/ICreateTeamDTO';

import Team from '../entities/Team';

class TeamsRepository implements ITeamsRepository {
  private ormRepository: Repository<Team>;

  constructor() {
    this.ormRepository = getRepository(Team);
  }

  public async findByChampionship(championship_id: string): Promise<Team[]> {
    const findTeam = await this.ormRepository.find({
      where: { championship_id },
    });

    return findTeam;
  }

  public async findByName(
    name: string,
    championship_id: string,
  ): Promise<Team | undefined> {
    const findTeam = await this.ormRepository.findOne({
      where: { name, championship_id },
    });

    return findTeam;
  }

  public async create({
    name,
    championship_id,
    user_id,
  }: ICreateTeamDTO): Promise<Team> {
    const team = this.ormRepository.create({
      name,
      avatar: `https://robohash.org/${name.replace(' ', '')}${user_id}`,
      championship_id,
      user_id,
    });

    await this.ormRepository.save(team);

    return team;
  }

  public async save(team: Team): Promise<Team> {
    return this.ormRepository.save(team);
  }
}

export default TeamsRepository;
