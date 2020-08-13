import AppError from '@shared/errors/AppError';

import FakeTeamsRepository from '../repositories/fakes/FakeTeamsRepository';
import CreateTeamService from './CreateTeamService';

let fakeTeamsRepository: FakeTeamsRepository;
let createTeam: CreateTeamService;

describe('CreateTeam', () => {
  beforeEach(() => {
    fakeTeamsRepository = new FakeTeamsRepository();
    createTeam = new CreateTeamService(fakeTeamsRepository);
  });

  it('should be able to create a new team', async () => {
    const team = await createTeam.execute({
      name: 'Fulano',
      avatar: 'fulano.svg',
      championship_id: 'u9qhg89q3hg0q9',
      user_id: '20983yqn9283y4r',
    });

    expect(team).toHaveProperty('id');
  });

  it('should not be able to create two teams with the same name', async () => {
    await createTeam.execute({
      name: 'Time Fulano',
      avatar: 'fulano.svg',
      championship_id: 'aosdhvjopiasdhvp',
      user_id: '20983yqn9283y4r',
    });

    await expect(
      createTeam.execute({
        name: 'Time Fulano',
        avatar: 'fulano.svg',
        championship_id: 'aosdhvjopiasdhvp',
        user_id: '20983yqn9283y4r',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
