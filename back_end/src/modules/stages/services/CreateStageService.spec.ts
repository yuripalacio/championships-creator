import FakeStagesRepository from '../repositories/fakes/FakeStagesRepository';
import CreateStageService from './CreateStageService';

let fakeStagesRepository: FakeStagesRepository;
let createStage: CreateStageService;

describe('CreateStage', () => {
  beforeEach(() => {
    fakeStagesRepository = new FakeStagesRepository();
    createStage = new CreateStageService(fakeStagesRepository);
  });

  it('should be able to create a new stage', async () => {
    const stage = await createStage.execute({
      name: 'Stage',
      user_id: '20983yqn9283y4r',
    });

    expect(stage).toHaveProperty('id');
  });
});
