import { uuid } from 'uuidv4';

import IStagesRepository from '@modules/stages/repositories/IStagesRepository';
import ICreateStageDTO from '@modules/stages/dtos/ICreateStageDTO';

import Stage from '../../infra/typeorm/entities/Stage';

class FakeStagesRepository implements IStagesRepository {
  private stages: Stage[] = [];

  public async findById(id: string): Promise<Stage | undefined> {
    const findStage = this.stages.find(stage => stage.id === id);

    return findStage;
  }

  public async findByName(name: string): Promise<Stage[]> {
    let { stages } = this;

    stages = stages.filter(stage => stage.name === name);

    return stages;
  }

  public async findAll(): Promise<Stage[]> {
    const { stages } = this;

    return stages;
  }

  public async create({ name, user_id }: ICreateStageDTO): Promise<Stage> {
    const stage = new Stage();

    Object.assign(stage, { id: uuid(), name, user_id });

    this.stages.push(stage);

    return stage;
  }

  public async save(stage: Stage): Promise<Stage> {
    const findIndex = this.stages.findIndex(
      findStage => findStage.id === stage.id,
    );

    this.stages[findIndex] = stage;

    return stage;
  }
}

export default FakeStagesRepository;
