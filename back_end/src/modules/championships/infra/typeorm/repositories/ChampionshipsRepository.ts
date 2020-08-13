import { getRepository, Repository } from 'typeorm';

import IChampionshipsRepository from '@modules/championships/repositories/IChampionshipsRepository';
import ICreateChampionshipDTO from '@modules/championships/dtos/ICreateChampionshipDTO';

import Championship from '../entities/Championship';

class ChampionshipsRepository implements IChampionshipsRepository {
  private ormRepository: Repository<Championship>;

  constructor() {
    this.ormRepository = getRepository(Championship);
  }

  public async findByUser(user_id: string): Promise<Championship | undefined> {
    const findChampionship = await this.ormRepository.findOne({
      where: { user_id },
    });

    return findChampionship;
  }

  public async create({
    name,
    user_id,
  }: ICreateChampionshipDTO): Promise<Championship> {
    const championship = this.ormRepository.create({ name, user_id });

    await this.ormRepository.save(championship);

    return championship;
  }

  public async save(championship: Championship): Promise<Championship> {
    return this.ormRepository.save(championship);
  }

  public async delete(championship: Championship): Promise<void> {
    this.ormRepository.delete(championship.id);
  }
}

export default ChampionshipsRepository;
