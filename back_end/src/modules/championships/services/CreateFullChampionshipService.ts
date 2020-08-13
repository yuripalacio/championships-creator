import { injectable, inject, container } from 'tsyringe';

import IChampionshipRepository from '@modules/championships/repositories/IChampionshipsRepository';

import CreateTeamService from '@modules/teams/services/CreateTeamService';
import ListTeamChampionshipService from '@modules/teams/services/ListTeamChampionshipService';

import CreateChampionshipStageService from '@modules/stages/services/CreateChampionshipStageService';
import ListStagesService from '@modules/stages/services/ListStagesService';

import ListStageTeamsService from '@modules/stageTeams/services/ListStageTeamsService';
import UpdateStageTeamScoreService from '@modules/stageTeams/services/UpdateStageTeamScoreService';
import ListStageTeamPlayoffService from '@modules/stageTeams/services/ListStageTeamPlayoffService';

import CreateChampionshipGroupPlayService from '@modules/plays/services/CreateChampionshipGroupPlayService';

import CreateChampionshipService from './CreateChampionshipService';

interface IRequest {
  name: string;
  user_id: string;
}

@injectable()
class CreateFullChampionshipService {
  constructor(
    @inject('ChampionshipsRepository')
    private championshipsRepository: IChampionshipRepository,
  ) {}

  public async execute({ name, user_id }: IRequest): Promise<void> {
    const createChampionship = container.resolve(CreateChampionshipService);

    const championship = await createChampionship.execute({ name, user_id });

    const championship_id = championship.id;

    const createTeam = container.resolve(CreateTeamService);

    let teams = [];
    const numberOfTeams = 80;

    for (let teamCount = 1; teamCount <= numberOfTeams; teamCount += 1) {
      teams.push(
        createTeam.execute({
          name: `Time ${`00${teamCount}`.slice(-2)}`,
          championship_id,
          user_id,
        }),
      );
    }

    await Promise.all(teams);

    const listTeamChampionship = container.resolve(ListTeamChampionshipService);

    teams = await listTeamChampionship.execute({
      championship_id,
    });

    const createChampionshipStage = container.resolve(
      CreateChampionshipStageService,
    );

    await createChampionshipStage.execute({
      championship_id,
      teams,
      numberOfTeamsPerStage: 5,
      user_id,
      stageName: 'Grupo',
    });

    const createChampionshipGroupPlay = container.resolve(
      CreateChampionshipGroupPlayService,
    );

    const listStages = container.resolve(ListStagesService);
    let stages = await listStages.execute({ name: 'Grupo', user_id });

    const listStageTeams = container.resolve(ListStageTeamsService);

    await Promise.all(
      stages.map(async stage => {
        const stage_teams = await listStageTeams.execute({
          stage_id: stage.id,
        });

        await createChampionshipGroupPlay.execute({
          stage_id: stage.id,
          stage_teams,
          user_id,
        });
      }),
    );

    const updateStageTeamScore = container.resolve(UpdateStageTeamScoreService);

    await updateStageTeamScore.execute();

    const listStageTeamPlayoff = container.resolve(ListStageTeamPlayoffService);

    let numberOfRankedTeams = 2;

    let stagesTeamsRanked = await listStageTeamPlayoff.execute({
      name: 'Grupo',
      numberOfRankedTeams,
      user_id,
    });

    let playoffTeams = [];

    for (let index = 0; index < stagesTeamsRanked.length; index += 1) {
      const stageTeamsRanked = stagesTeamsRanked[index];

      playoffTeams.push(stageTeamsRanked[0]);
      playoffTeams.push(stageTeamsRanked[1]);
    }

    await Promise.all(playoffTeams);

    // ---------------------------------------------------------

    await createChampionshipStage.execute({
      championship_id,
      teams: playoffTeams,
      numberOfTeamsPerStage: 2,
      user_id,
      stageName: 'Round 1',
    });

    stages = await listStages.execute({ name: 'Round 1', user_id });

    await Promise.all(
      stages.map(async stage => {
        const stage_teams = await listStageTeams.execute({
          stage_id: stage.id,
        });

        await createChampionshipGroupPlay.execute({
          stage_id: stage.id,
          stage_teams,
          user_id,
        });
      }),
    );

    await updateStageTeamScore.execute();

    numberOfRankedTeams = 1;

    stagesTeamsRanked = await listStageTeamPlayoff.execute({
      name: 'Round 1',
      numberOfRankedTeams,
      user_id,
    });

    playoffTeams = [];

    for (let index = 0; index < stagesTeamsRanked.length; index += 1) {
      const stageTeamsRanked = stagesTeamsRanked[index];

      playoffTeams.push(stageTeamsRanked[0]);
    }

    await Promise.all(playoffTeams);

    // ---------------------------------------------------------

    await createChampionshipStage.execute({
      championship_id,
      teams: playoffTeams,
      numberOfTeamsPerStage: 2,
      user_id,
      stageName: 'Round 2',
    });

    stages = await listStages.execute({ name: 'Round 2', user_id });

    await Promise.all(
      stages.map(async stage => {
        const stage_teams = await listStageTeams.execute({
          stage_id: stage.id,
        });

        await createChampionshipGroupPlay.execute({
          stage_id: stage.id,
          stage_teams,
          user_id,
        });
      }),
    );

    await updateStageTeamScore.execute();

    stagesTeamsRanked = await listStageTeamPlayoff.execute({
      name: 'Round 2',
      numberOfRankedTeams,
      user_id,
    });

    playoffTeams = [];

    for (let index = 0; index < stagesTeamsRanked.length; index += 1) {
      const stageTeamsRanked = stagesTeamsRanked[index];

      playoffTeams.push(stageTeamsRanked[0]);
    }

    await Promise.all(playoffTeams);

    // ---------------------------------------------------------

    await createChampionshipStage.execute({
      championship_id,
      teams: playoffTeams,
      numberOfTeamsPerStage: 2,
      user_id,
      stageName: 'Round 3',
    });

    stages = await listStages.execute({ name: 'Round 3', user_id });

    await Promise.all(
      stages.map(async stage => {
        const stage_teams = await listStageTeams.execute({
          stage_id: stage.id,
        });

        await createChampionshipGroupPlay.execute({
          stage_id: stage.id,
          stage_teams,
          user_id,
        });
      }),
    );

    await updateStageTeamScore.execute();

    stagesTeamsRanked = await listStageTeamPlayoff.execute({
      name: 'Round 3',
      numberOfRankedTeams,
      user_id,
    });

    playoffTeams = [];

    for (let index = 0; index < stagesTeamsRanked.length; index += 1) {
      const stageTeamsRanked = stagesTeamsRanked[index];

      playoffTeams.push(stageTeamsRanked[0]);
    }

    await Promise.all(playoffTeams);

    // ---------------------------------------------------------

    await createChampionshipStage.execute({
      championship_id,
      teams: playoffTeams,
      numberOfTeamsPerStage: 2,
      user_id,
      stageName: 'Round 4',
    });

    stages = await listStages.execute({ name: 'Round 4', user_id });

    await Promise.all(
      stages.map(async stage => {
        const stage_teams = await listStageTeams.execute({
          stage_id: stage.id,
        });

        await createChampionshipGroupPlay.execute({
          stage_id: stage.id,
          stage_teams,
          user_id,
        });
      }),
    );

    await updateStageTeamScore.execute();

    stagesTeamsRanked = await listStageTeamPlayoff.execute({
      name: 'Round 4',
      numberOfRankedTeams,
      user_id,
    });

    playoffTeams = [];

    for (let index = 0; index < stagesTeamsRanked.length; index += 1) {
      const stageTeamsRanked = stagesTeamsRanked[index];

      playoffTeams.push(stageTeamsRanked[0]);
    }

    await Promise.all(playoffTeams);

    // ---------------------------------------------------------

    await createChampionshipStage.execute({
      championship_id,
      teams: playoffTeams,
      numberOfTeamsPerStage: 2,
      user_id,
      stageName: 'Round 5',
    });

    stages = await listStages.execute({ name: 'Round 5', user_id });

    await Promise.all(
      stages.map(async stage => {
        const stage_teams = await listStageTeams.execute({
          stage_id: stage.id,
        });

        await createChampionshipGroupPlay.execute({
          stage_id: stage.id,
          stage_teams,
          user_id,
        });
      }),
    );

    await updateStageTeamScore.execute();

    stagesTeamsRanked = await listStageTeamPlayoff.execute({
      name: 'Round 5',
      numberOfRankedTeams,
      user_id,
    });

    // ---------------------------------------------------------

    const groupStages = await listStages.execute({ name: 'Grupo', user_id });
    const teamsGroupStage = [];

    await Promise.all(
      groupStages.map(async groupStage => {
        teamsGroupStage.push(
          await listStageTeams.execute({
            stage_id: groupStage.id,
          }),
        );
      }),
    );
  }
}

export default CreateFullChampionshipService;
