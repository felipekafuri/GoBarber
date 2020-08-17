import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';
import DiskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
  diskstorage: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.diskstorage
);
