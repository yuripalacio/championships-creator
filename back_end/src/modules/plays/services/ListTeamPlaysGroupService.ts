import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPlayRepository from '@modules/plays/repositories/IPlaysRepository';

interface IRequest {
  user_id: string;
  stage_name: string;
}

@injectable()
class ListTeamPlaysGroupService {
  constructor(
    @inject('PlaysRepository')
    private playsRepository: IPlayRepository,
  ) {}

  public async show({ user_id, stage_name }: IRequest): Promise<string[]> {
    const plays = await this.playsRepository.findTeamPlaysGroupService(
      user_id,
      stage_name,
    );

    if (!plays) {
      throw new AppError('Play does not found');
    }

    return plays;
  }
}

export default ListTeamPlaysGroupService;
