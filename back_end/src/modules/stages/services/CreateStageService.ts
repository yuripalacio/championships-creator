import { injectable, inject } from 'tsyringe';

import IStageRepository from '@modules/stages/repositories/IStagesRepository';
import Stage from '../infra/typeorm/entities/Stage';

interface IRequest {
  name: string;
  user_id: string;
}

@injectable()
class CreateStageService {
  constructor(
    @inject('StagesRepository')
    private stagesRepository: IStageRepository,
  ) {}

  public async execute({ name, user_id }: IRequest): Promise<Stage> {
    const stage = await this.stagesRepository.create({
      name,
      user_id,
    });

    return stage;
  }
}

export default CreateStageService;
