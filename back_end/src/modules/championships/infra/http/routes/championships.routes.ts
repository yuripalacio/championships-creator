import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ChampionshipsController from '../controllers/ChampionshipsController';

const championshipsRouter = Router();
const championshipsCotroller = new ChampionshipsController();

championshipsRouter.use(ensureAuthenticated);

championshipsRouter.get('/', championshipsCotroller.index);
championshipsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  championshipsCotroller.create,
);

export default championshipsRouter;
