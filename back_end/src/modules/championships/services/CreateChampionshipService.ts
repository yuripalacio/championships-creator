import { injectable, inject } from 'tsyringe';

import IChampionshipRepository from '@modules/championships/repositories/IChampionshipsRepository';
import Championship from '../infra/typeorm/entities/Championship';

interface IRequest {
  name: string;
  user_id: string;
}

@injectable()
class CreateChampionshipService {
  constructor(
    @inject('ChampionshipsRepository')
    private championshipsRepository: IChampionshipRepository,
  ) {}

  public async execute({ name, user_id }: IRequest): Promise<Championship> {
    const findByUser = await this.championshipsRepository.findByUser(user_id);

    if (findByUser) {
      await this.championshipsRepository.delete(findByUser);
    }

    const championship = await this.championshipsRepository.create({
      name,
      user_id,
    });

    return championship;
  }
}

export default CreateChampionshipService;
