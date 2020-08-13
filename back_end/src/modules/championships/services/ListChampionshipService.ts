import { injectable, inject } from 'tsyringe';

import IChampionshipRepository from '@modules/championships/repositories/IChampionshipsRepository';
import Championship from '../infra/typeorm/entities/Championship';

interface IRequest {
  user_id: string;
}

@injectable()
class ListChampionshipService {
  constructor(
    @inject('ChampionshipsRepository')
    private championshipsRepository: IChampionshipRepository,
  ) {}

  public async execute({
    user_id,
  }: IRequest): Promise<Championship | undefined> {
    const championship = await this.championshipsRepository.findByUser(user_id);

    return championship;
  }
}

export default ListChampionshipService;
