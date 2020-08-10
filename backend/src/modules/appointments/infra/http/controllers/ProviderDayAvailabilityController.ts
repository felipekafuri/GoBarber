import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityControllers {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year, day } = request.body;
    const { provider_id } = request.params;

    const listProvidersDayAvailability = container.resolve(
      ListProviderDayAvailabilityService
    );

    const availability = await listProvidersDayAvailability.execute({
      provider_id,
      month,
      year,
      day,
    });

    return response.json(availability);
  }
}
