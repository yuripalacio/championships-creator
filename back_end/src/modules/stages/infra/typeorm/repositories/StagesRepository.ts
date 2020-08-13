import { getRepository, Repository, Like } from 'typeorm';

import IStagesRepository from '@modules/stages/repositories/IStagesRepository';
import ICreateStageDTO from '@modules/stages/dtos/ICreateStageDTO';

import Stage from '../entities/Stage';

interface IFindStageTeam {
  user_id: string;
  stage_name: string;
}

class StagesRepository implements IStagesRepository {
  private ormRepository: Repository<Stage>;

  constructor() {
    this.ormRepository = getRepository(Stage);
  }

  public async findById(id: string): Promise<Stage | undefined> {
    const findStage = await this.ormRepository.findOne(id);

    return findStage;
  }

  public async findByName(name: string, user_id: string): Promise<Stage[]> {
    const findStage = await this.ormRepository.find({
      where: {
        name: Like(`%${name}%`),
        user_id,
      },
    });

    return findStage;
  }

  public async findAll(user_id: string): Promise<Stage[]> {
    const stages = await this.ormRepository.find({
      where: {
        user_id,
      },
    });

    return stages;
  }

  public async findStageTeam(
    user_id: string,
    stage_name: string,
  ): Promise<string[]> {
    const findStageTeam = await this.ormRepository.query(`select s.id, s.name
      from stages s
      where s.user_id = '${user_id}' and s.name like '%${stage_name}%'
      order by s.name`);

    return findStageTeam;
  }

  public async create({
    championship_id,
    name,
    user_id,
  }: ICreateStageDTO): Promise<Stage> {
    const stage = this.ormRepository.create({
      championship_id,
      name,
      user_id,
    });

    await this.ormRepository.save(stage);

    return stage;
  }

  public async save(stage: Stage): Promise<Stage> {
    return this.ormRepository.save(stage);
  }
}

export default StagesRepository;
