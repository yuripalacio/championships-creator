import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PlaysController from '../controllers/PlaysController';
import TeamPlaysGroupController from '../controllers/TeamPlaysGroupController';

const playsRouter = Router();
const playsCotroller = new PlaysController();
const teamPlaysGroupController = new TeamPlaysGroupController();

playsRouter.use(ensureAuthenticated);

playsRouter.post('/', playsCotroller.create);
playsRouter.get('/', teamPlaysGroupController.show);

export default playsRouter;
