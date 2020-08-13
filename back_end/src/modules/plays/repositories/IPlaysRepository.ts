import Play from '../infra/typeorm/entities/Play';
import ICreatePlayDTO from '../dtos/ICreatePlayDTO';

export default interface IPlaysRepository {
  findById(id: string): Promise<Play | undefined>;
  findByStageTeam(
    stage_id: string,
    team_id: string,
  ): Promise<Play[] | undefined>;
  create(data: ICreatePlayDTO): Promise<Play>;
  save(play: Play): Promise<Play>;
  findTeamPlaysGroupService(
    user_id: string,
    stage_name: string,
  ): Promise<string[]>;
}
