import { getRepository } from 'typeorm';
import { hash } from 'bcrypt';
import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}
// Regra de negocio

class CreateUserService {
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUsserExists) {
      throw new AppError('User is already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;