import { container, injectable, inject } from 'tsyringe';

import IStageRepository from '@modules/stages/repositories/IStagesRepository';
import Team from '@modules/teams/infra/typeorm/entities/Team';

import ListStagesService from '@modules/stages/services/ListStagesService';

import CreateStageTeamService from '@modules/stageTeams/services/CreateStageTeamService';

interface IRequest {
  championship_id: string;
  teams: Team[];
  numberOfTeamsPerStage: number;
  user_id: string;
  stageName: string;
}

@injectable()
class CreateChampionshipStageService {
  constructor(
    @inject('StagesRepository')
    private stagesRepository: IStageRepository,
  ) {}

  public async execute({
    championship_id,
    teams,
    numberOfTeamsPerStage,
    user_id,
    stageName,
  }: IRequest): Promise<void> {
    let stages = [];
    const numberOfStages = teams.length / numberOfTeamsPerStage;

    for (let groupNumber = 1; groupNumber <= numberOfStages; groupNumber += 1) {
      const name =
        stageName === 'Grupo'
          ? `${stageName} ${groupNumber.toString()}`
          : stageName;

      stages.push(
        this.stagesRepository.create({
          championship_id,
          name,
          user_id,
        }),
      );
    }

    await Promise.all(stages);

    const listStages = container.resolve(ListStagesService);
    stages = await listStages.execute({ name: stageName, user_id });

    const createStageTeam = container.resolve(CreateStageTeamService);

    let stageCount = 0;
    let randomPosition = 0;
    const stage_teams = [];

    while (teams.length > 0) {
      for (
        let teamCount = 1;
        teamCount <= numberOfTeamsPerStage;
        teamCount += 1
      ) {
        randomPosition = Math.floor(Math.random() * teams.length);

        stage_teams.push(
          createStageTeam.execute({
            stage_id: stages[stageCount].id,
            team_id: teams[randomPosition].id
              ? teams[randomPosition].id
              : teams[randomPosition].team_id,
            user_id,
          }),
        );

        teams.splice(randomPosition, 1);
      }

      stageCount += 1;
    }

    await Promise.all(stage_teams);
  }
}

export default CreateChampionshipStageService;
