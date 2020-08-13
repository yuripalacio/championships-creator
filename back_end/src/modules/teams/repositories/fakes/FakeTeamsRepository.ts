import { uuid } from 'uuidv4';

import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import ICreateTeamDTO from '@modules/teams/dtos/ICreateTeamDTO';

import Team from '../../infra/typeorm/entities/Team';

class FakeTeamsRepository implements ITeamsRepository {
  private teams: Team[] = [];

  public async findByChampionship(championship_id: string): Promise<Team[]> {
    let { teams } = this;

    teams = teams.filter(team => team.championship_id === championship_id);

    return teams;
  }

  public async findByName(name: string): Promise<Team | undefined> {
    const findTeam = this.teams.find(team => team.name === name);

    return findTeam;
  }

  public async create({
    name,
    avatar,
    championship_id,
    user_id,
  }: ICreateTeamDTO): Promise<Team> {
    const team = new Team();

    Object.assign(team, { id: uuid(), name, avatar, championship_id, user_id });

    this.teams.push(team);

    return team;
  }

  public async save(team: Team): Promise<Team> {
    const findIndex = this.teams.findIndex(findTeam => findTeam.id === team.id);

    this.teams[findIndex] = team;

    return team;
  }
}

export default FakeTeamsRepository;
