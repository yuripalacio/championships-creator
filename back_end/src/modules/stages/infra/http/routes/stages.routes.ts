import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import StagesController from '../controllers/StagesController';

const stagesRouter = Router();
const stagesCotroller = new StagesController();

stagesRouter.use(ensureAuthenticated);

stagesRouter.post('/', stagesCotroller.create);

export default stagesRouter;
