import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import CreateAppointmentService from './CreateAppointmentService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(fakeAppointmentRepository);
  });

  it('should be able to create a new appointment.', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1234123424',
      user_id: '1234',
    });

    expect(appointment).toHaveProperty('id');
  });

  it('should not be able to create two appointments on the same time.', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '1234123424',
      user_id: '1234',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '1234123424',
        user_id: '1234',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
