import { authModule } from './modules';
import $http from './httpClient';

const $api = {
  auth: authModule({ $http }),
};

export default $api;
