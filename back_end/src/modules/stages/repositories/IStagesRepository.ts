import Stage from '../infra/typeorm/entities/Stage';
import ICreateStageDTO from '../dtos/ICreateStageDTO';

export default interface IStagesRepository {
  findById(id: string): Promise<Stage | undefined>;
  findByName(name: string, user_id: string): Promise<Stage[]>;
  findAll(user_id: string): Promise<Stage[]>;
  findStageTeam(user_id: string, stage_name: string): Promise<string[]>;
  create(data: ICreateStageDTO): Promise<Stage>;
  save(stage: Stage): Promise<Stage>;
}
