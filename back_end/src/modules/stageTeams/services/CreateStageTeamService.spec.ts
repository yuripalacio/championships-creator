import FakeStageTeamsRepository from '../repositories/fakes/FakeStageTeamsRepository';
import CreateStageTeamService from './CreateStageTeamService';

let fakeStageTeamsRepository: FakeStageTeamsRepository;
let createStageTeam: CreateStageTeamService;

describe('CreateStageTeam', () => {
  beforeEach(() => {
    fakeStageTeamsRepository = new FakeStageTeamsRepository();
    createStageTeam = new CreateStageTeamService(fakeStageTeamsRepository);
  });

  it('should be able to create a new Stage Team', async () => {
    const stageTeam = await createStageTeam.execute({
      stage_id: 'wohfoiewhfoiwe',
      team_id: 'oashfasidhfisadu',
      user_id: '20983yqn9283y4r',
    });

    expect(stageTeam).toHaveProperty('id');
  });
});
