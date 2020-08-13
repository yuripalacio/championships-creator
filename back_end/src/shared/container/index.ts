import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IChampionshipsRepository from '@modules/championships/repositories/IChampionshipsRepository';
import ChampionshipsRepository from '@modules/championships/infra/typeorm/repositories/ChampionshipsRepository';

import ITeamsRepository from '@modules/teams/repositories/ITeamsRepository';
import TeamsRepository from '@modules/teams/infra/typeorm/repositories/TeamsRepository';

import IStagesRepository from '@modules/stages/repositories/IStagesRepository';
import StagesRepository from '@modules/stages/infra/typeorm/repositories/StagesRepository';

import IStageTeamsRepository from '@modules/stageTeams/repositories/IStageTeamsRepository';
import StageTeamsRepository from '@modules/stageTeams/infra/typeorm/repositories/StageTeamsRepository';

import IPlaysRepository from '@modules/plays/repositories/IPlaysRepository';
import PlaysRepository from '@modules/plays/infra/typeorm/repositories/PlaysRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IChampionshipsRepository>(
  'ChampionshipsRepository',
  ChampionshipsRepository,
);

container.registerSingleton<ITeamsRepository>(
  'TeamsRepository',
  TeamsRepository,
);

container.registerSingleton<IStagesRepository>(
  'StagesRepository',
  StagesRepository,
);

container.registerSingleton<IStageTeamsRepository>(
  'StageTeamsRepository',
  StageTeamsRepository,
);

container.registerSingleton<IPlaysRepository>(
  'PlaysRepository',
  PlaysRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
