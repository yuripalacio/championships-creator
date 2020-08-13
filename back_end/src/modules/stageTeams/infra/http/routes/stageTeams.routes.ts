import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import StageTeamsController from '../controllers/StageTeamsController';

const stageTeamsRouter = Router();
const stageTeamsCotroller = new StageTeamsController();

stageTeamsRouter.use(ensureAuthenticated);

stageTeamsRouter.post('/', stageTeamsCotroller.create);

export default stageTeamsRouter;
