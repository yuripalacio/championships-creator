import Team from '../infra/typeorm/entities/Team';
import ICreateTeamDTO from '../dtos/ICreateTeamDTO';

export default interface ITeamsRepository {
  findByChampionship(championship_id: string): Promise<Team[]>;
  findByName(name: string, championship_id: string): Promise<Team | undefined>;
  create(data: ICreateTeamDTO): Promise<Team>;
  save(team: Team): Promise<Team>;
}
