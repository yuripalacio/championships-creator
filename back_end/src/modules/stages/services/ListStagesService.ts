import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStageRepository from '@modules/stages/repositories/IStagesRepository';
import Stage from '../infra/typeorm/entities/Stage';

interface IRequest {
  name: string;
  user_id: string;
}

@injectable()
class ListStagesService {
  constructor(
    @inject('StagesRepository')
    private stagesRepository: IStageRepository,
  ) {}

  public async execute({ name, user_id }: IRequest): Promise<Stage[]> {
    const stages = await this.stagesRepository.findByName(name, user_id);

    if (!stages) {
      throw new AppError('Stage name does not exists');
    }

    return stages;
  }
}

export default ListStagesService;
