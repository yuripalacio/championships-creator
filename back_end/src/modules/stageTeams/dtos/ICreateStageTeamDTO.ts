export default interface ICreateStageTeamDTO {
  stage_id: string;
  team_id: string;
  score?: number;
  round?: number;
  user_id: string;
}
