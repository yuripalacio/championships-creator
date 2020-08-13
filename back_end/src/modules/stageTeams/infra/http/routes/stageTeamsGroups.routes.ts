import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import StageTeamGroupsController from '../controllers/StageTeamGroupsController';

const stageTeamsGroupRouter = Router();
const stageTeamGroupsController = new StageTeamGroupsController();

stageTeamsGroupRouter.use(ensureAuthenticated);

stageTeamsGroupRouter.get('/', stageTeamGroupsController.show);

export default stageTeamsGroupRouter;
