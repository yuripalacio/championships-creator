import FakeChampionshipsRepository from '../repositories/fakes/FakeChampionshipsRepository';
import CreateChampionshipService from './CreateChampionshipService';

let fakeChampionshipsRepository: FakeChampionshipsRepository;
let createChampionship: CreateChampionshipService;

describe('CreateChampionship', () => {
  beforeEach(() => {
    fakeChampionshipsRepository = new FakeChampionshipsRepository();
    createChampionship = new CreateChampionshipService(
      fakeChampionshipsRepository,
    );
  });

  it('should be able to create a new championship', async () => {
    const championship = await createChampionship.execute({
      name: 'Championship',
      user_id: '20983yqn9283y4r',
    });

    expect(championship).toHaveProperty('id');
  });
});
