import FakePlaysRepository from '../repositories/fakes/FakePlaysRepository';
import CreatePlayService from './CreatePlayService';

let fakePlaysRepository: FakePlaysRepository;
let createPlay: CreatePlayService;

describe('CreatePlay', () => {
  beforeEach(() => {
    fakePlaysRepository = new FakePlaysRepository();
    createPlay = new CreatePlayService(fakePlaysRepository);
  });

  it('should be able to create a new play', async () => {
    const play = await createPlay.execute({
      stage_id: 'ablsiudhfoia',
      team_1_id: 'japoidshgpoids',
      team_2_id: 'fjq983f9q83',
      user_id: '20983yqn9283y4r',
    });

    expect(play).toHaveProperty('id');
  });
});
