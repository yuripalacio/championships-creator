import { uuid } from 'uuidv4';

import IStageTeamsRepository from '@modules/stageTeams/repositories/IStageTeamsRepository';
import ICreateStageTeamDTO from '@modules/stageTeams/dtos/ICreateStageTeamDTO';

import StageTeam from '../../infra/typeorm/entities/StageTeam';

class FakeStageTeamsRepository implements IStageTeamsRepository {
  private stageTeams: StageTeam[] = [];

  public async findById(id: string): Promise<StageTeam | undefined> {
    const findStageTeam = this.stageTeams.find(
      stageTeam => stageTeam.id === id,
    );

    return findStageTeam;
  }

  public async findByStage(stage_id: string): Promise<StageTeam[]> {
    let { stageTeams } = this;

    stageTeams = stageTeams.filter(
      stageTeam => stageTeam.stage_id === stage_id,
    );

    return stageTeams;
  }

  public async create({
    stage_id,
    team_id,
    user_id,
  }: ICreateStageTeamDTO): Promise<StageTeam> {
    const stageTeam = new StageTeam();

    Object.assign(stageTeam, { id: uuid(), stage_id, team_id, user_id });

    this.stageTeams.push(stageTeam);

    return stageTeam;
  }

  public async save(stageTeam: StageTeam): Promise<StageTeam> {
    const findIndex = this.stageTeams.findIndex(
      findStageTeam => findStageTeam.id === stageTeam.id,
    );

    this.stageTeams[findIndex] = stageTeam;

    return stageTeam;
  }
}

export default FakeStageTeamsRepository;
