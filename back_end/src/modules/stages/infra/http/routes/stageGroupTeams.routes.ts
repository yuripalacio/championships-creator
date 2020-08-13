import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import StageGroupsController from '../controllers/StageGroupsController';

const stageGroupTeamsRouter = Router();
const stageGroupsController = new StageGroupsController();

stageGroupTeamsRouter.use(ensureAuthenticated);

stageGroupTeamsRouter.get('/', stageGroupsController.show);

export default stageGroupTeamsRouter;
