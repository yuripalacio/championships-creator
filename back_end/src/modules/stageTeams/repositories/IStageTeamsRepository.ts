import Team from '@modules/teams/infra/typeorm/entities/Team';
import StageTeam from '../infra/typeorm/entities/StageTeam';
import ICreateStageTeamDTO from '../dtos/ICreateStageTeamDTO';

export default interface IStageTeamsRepository {
  findById(id: string): Promise<StageTeam | undefined>;
  findByStage(stage_id: string): Promise<StageTeam[]>;
  findByStageAndTeam(
    stage_id: string,
    team_id: string,
  ): Promise<StageTeam | undefined>;
  findRankedTeams(
    stage_id: string,
    numberOfRankedTeams: number,
  ): Promise<Team[]>;
  findStageTeamOutdated(): Promise<StageTeam[]>;
  findStageGroupTeam(user_id: string, stage_id: string): Promise<string[]>;
  create(data: ICreateStageTeamDTO): Promise<StageTeam>;
  save(stageTeam: StageTeam): Promise<StageTeam>;
}
