import { getRepository, Repository } from 'typeorm';

import IPlaysRepository from '@modules/plays/repositories/IPlaysRepository';
import ICreatePlayDTO from '@modules/plays/dtos/ICreatePlayDTO';

import Play from '../entities/Play';

class PlaysRepository implements IPlaysRepository {
  private ormRepository: Repository<Play>;

  constructor() {
    this.ormRepository = getRepository(Play);
  }

  public async findById(id: string): Promise<Play | undefined> {
    const findPlay = await this.ormRepository.findOne(id);

    return findPlay;
  }

  public async findByStageTeam(
    stage_id: string,
    team_id: string,
  ): Promise<Play[] | undefined> {
    const findPlay = await this.ormRepository.find({
      where: [
        { stage_id, team_1_id: team_id },
        { stage_id, team_2_id: team_id },
      ],
    });

    return findPlay;
  }

  public async findTeamPlaysGroupService(
    user_id: string,
    stage_name: string,
  ): Promise<string[]> {
    const findTeamPlaysGroup = await this.ormRepository
      .query(`select s.id, s.name stage_name, t1.name team_1_name, t1.avatar team_1_avatar, p.round_team_1, t2.name team_2_name, t2.avatar team_2_avatar, p.round_team_2
      from stages s
      inner join plays p on p.stage_id = s.id
      inner join teams t1 on t1.id = p.team_1_id
      inner join teams t2 on t2.id = p.team_2_id
      where s.user_id = '${user_id}' and s.name = '${stage_name}'
      order by p.count_play`);

    return findTeamPlaysGroup;
  }

  public async create({
    stage_id,
    team_1_id,
    team_2_id,
    round_team_1,
    round_team_2,
    user_id,
  }: ICreatePlayDTO): Promise<Play> {
    const play = this.ormRepository.create({
      stage_id,
      team_1_id,
      team_2_id,
      round_team_1,
      round_team_2,
      user_id,
    });

    await this.ormRepository.save(play);

    return play;
  }

  public async save(play: Play): Promise<Play> {
    return this.ormRepository.save(play);
  }
}

export default PlaysRepository;
