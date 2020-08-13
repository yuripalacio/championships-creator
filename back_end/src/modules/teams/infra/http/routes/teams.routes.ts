import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import TeamsController from '../controllers/TeamsController';

const teamsRouter = Router();
const teamsCotroller = new TeamsController();

teamsRouter.use(ensureAuthenticated);

teamsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  teamsCotroller.create,
);

export default teamsRouter;
