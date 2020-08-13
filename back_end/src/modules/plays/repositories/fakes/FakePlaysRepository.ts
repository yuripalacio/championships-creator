import { uuid } from 'uuidv4';

import IPlaysRepository from '@modules/plays/repositories/IPlaysRepository';
import ICreatePlayDTO from '@modules/plays/dtos/ICreatePlayDTO';

import Play from '../../infra/typeorm/entities/Play';

class FakePlaysRepository implements IPlaysRepository {
  private plays: Play[] = [];

  public async findById(id: string): Promise<Play | undefined> {
    const findPlay = this.plays.find(play => play.id === id);

    return findPlay;
  }

  public async create({
    stage_id,
    team_1_id,
    team_2_id,
    user_id,
  }: ICreatePlayDTO): Promise<Play> {
    const play = new Play();

    Object.assign(play, {
      id: uuid(),
      stage_id,
      team_1_id,
      team_2_id,
      user_id,
    });

    this.plays.push(play);

    return play;
  }

  public async save(play: Play): Promise<Play> {
    const findIndex = this.plays.findIndex(findPlay => findPlay.id === play.id);

    this.plays[findIndex] = play;

    return play;
  }
}

export default FakePlaysRepository;
