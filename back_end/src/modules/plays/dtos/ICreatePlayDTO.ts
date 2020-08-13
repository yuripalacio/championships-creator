export default interface ICreatePlayDTO {
  stage_id: string;
  team_1_id: string;
  team_2_id: string;
  round_team_1?: number;
  round_team_2?: number;
  user_id: string;
}
