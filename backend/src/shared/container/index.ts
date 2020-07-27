import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsReposioty from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersReposioty from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsReposioty>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersReposioty>(
  'UsersRepository',
  UsersRepository
);
