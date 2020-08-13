import { uuid } from 'uuidv4';

import IChampionshipsRepository from '@modules/championships/repositories/IChampionshipsRepository';
import ICreateChampionshipDTO from '@modules/championships/dtos/ICreateChampionshipDTO';

import Championship from '../../infra/typeorm/entities/Championship';

class FakeChampionshipsRepository implements IChampionshipsRepository {
  private championships: Championship[] = [];

  public async findByUser(user_id: string): Promise<Championship | undefined> {
    const findChampionship = this.championships.find(
      championship => championship.user_id === user_id,
    );

    return findChampionship;
  }

  public async create({
    name,
    user_id,
  }: ICreateChampionshipDTO): Promise<Championship> {
    const championship = new Championship();

    Object.assign(championship, { id: uuid(), name, user_id });

    this.championships.push(championship);

    return championship;
  }

  public async save(championship: Championship): Promise<Championship> {
    const findIndex = this.championships.findIndex(
      findChampionship => findChampionship.id === championship.id,
    );

    this.championships[findIndex] = championship;

    return championship;
  }
}

export default FakeChampionshipsRepository;
