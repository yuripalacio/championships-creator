import { getRepository, Repository } from 'typeorm';

import IStageTeamsRepository from '@modules/stageTeams/repositories/IStageTeamsRepository';
import ICreateStageTeamDTO from '@modules/stageTeams/dtos/ICreateStageTeamDTO';

import Team from '@modules/teams/infra/typeorm/entities/Team';
import StageTeam from '../entities/StageTeam';

class StageTeamsRepository implements IStageTeamsRepository {
  private ormRepository: Repository<StageTeam>;

  constructor() {
    this.ormRepository = getRepository(StageTeam);
  }

  public async findStageTeamOutdated(): Promise<StageTeam[]> {
    const findStageTeam = await this.ormRepository.find({
      where: { round: 0 },
    });

    return findStageTeam;
  }

  public async findById(id: string): Promise<StageTeam | undefined> {
    const findStageTeam = await this.ormRepository.findOne(id);

    return findStageTeam;
  }

  public async findByStage(stage_id: string): Promise<StageTeam[]> {
    const findStageTeam = await this.ormRepository.find({
      where: { stage_id },
      relations: ['team'],
    });

    return findStageTeam;
  }

  public async findStageGroupTeam(
    user_id: string,
    stage_id: string,
  ): Promise<string[]> {
    const findStageGroupTeam = await this.ormRepository
      .query(`select st.id, st.team_id, t.name, t.avatar, st.score, st.round
    from stages s
    inner join stages_teams st on st.stage_id = s.id
    inner join teams t on t.id = st.team_id
    where s.user_id = '${user_id}' and s.id = '${stage_id}'
    order by st.score desc, st.round desc`);

    return findStageGroupTeam;
  }

  public async findByStageAndTeam(
    stage_id: string,
    team_id: string,
  ): Promise<StageTeam | undefined> {
    const findStageTeam = await this.ormRepository.findOne({
      where: { stage_id, team_id },
    });

    return findStageTeam;
  }

  public async findRankedTeams(
    stage_id: string,
    numberOfRankedTeams: number,
  ): Promise<Team[]> {
    const findRankedTeams = await this.ormRepository.find({
      select: ['team_id'],
      where: { stage_id },
      order: {
        score: 'DESC',
        round: 'DESC',
      },
      take: numberOfRankedTeams,
    });

    return findRankedTeams;
  }

  public async create({
    stage_id,
    team_id,
    user_id,
  }: ICreateStageTeamDTO): Promise<StageTeam> {
    const stageTeam = this.ormRepository.create({
      stage_id,
      team_id,
      user_id,
    });

    await this.ormRepository.save(stageTeam);

    return stageTeam;
  }

  public async save(stageTeam: StageTeam): Promise<StageTeam> {
    return this.ormRepository.save(stageTeam);
  }
}

export default StageTeamsRepository;
