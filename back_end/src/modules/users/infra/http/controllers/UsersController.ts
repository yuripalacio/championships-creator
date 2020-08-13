import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';
import CreateFullChampionshipService from '@modules/championships/services/CreateFullChampionshipService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    const createFullChampionship = container.resolve(
      CreateFullChampionshipService,
    );

    await createFullChampionship.execute({
      name: `Teste GC - ${name}`,
      user_id: user.id,
    });

    return response.json(classToClass(user));
  }
}
