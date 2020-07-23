import Appointments from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentsDTO from '../dtos/ICreateAppointmentsDTO';

interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointments | undefined>;
  create(data: ICreateAppointmentsDTO): Promise<Appointments>;
}

export default IAppointmentsRepository;
