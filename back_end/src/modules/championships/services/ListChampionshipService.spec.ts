import FakeChampionshipsRepository from '../repositories/fakes/FakeChampionshipsRepository';
import CreateChampionshipService from './CreateChampionshipService';
import ListChampionshipService from './ListChampionshipService';

let fakeChampionshipsRepository: FakeChampionshipsRepository;
let createChampionship: CreateChampionshipService;
let listChampionshipService: ListChampionshipService;

describe('ListChampionship', () => {
  beforeEach(() => {
    fakeChampionshipsRepository = new FakeChampionshipsRepository();
    createChampionship = new CreateChampionshipService(
      fakeChampionshipsRepository,
    );
    listChampionshipService = new ListChampionshipService(
      fakeChampionshipsRepository,
    );
  });

  it('should be able to list the championship', async () => {
    const championship = await createChampionship.execute({
      name: 'Championship',
      user_id: '20983yqn9283y4r',
    });

    const championships = await listChampionshipService.execute({
      user_id: '20983yqn9283y4r',
    });

    expect(championships).toBe(championship);
  });
});
