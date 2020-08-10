import IFindAllInMonthProviderDTO from '@modules/appointments/dtos/IFindAllInMonthProviderDTO';
import Appointments from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentsDTO from '../dtos/ICreateAppointmentsDTO';
import IFindAllInDayProviderDTO from '../dtos/IFindAllInDayProviderDTO';

interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointments | undefined>;
  create(data: ICreateAppointmentsDTO): Promise<Appointments>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthProviderDTO
  ): Promise<Appointments[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayProviderDTO
  ): Promise<Appointments[]>;
}

export default IAppointmentsRepository;
