import { Router } from 'express';

import championshipsRouter from '@modules/championships/infra/http/routes/championships.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import stageGroupTeamsRouter from '@modules/stages/infra/http/routes/stageGroupTeams.routes';
import stageTeamsGroupRouter from '@modules/stageTeams/infra/http/routes/stageTeamsGroups.routes';
import playsRouter from '@modules/plays/infra/http/routes/plays.routes';

const routes = Router();

routes.use('/championships', championshipsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

routes.use('/stage-group-teams', stageGroupTeamsRouter);
routes.use('/stage-teams-group', stageTeamsGroupRouter);
routes.use('/plays', playsRouter);

export default routes;
