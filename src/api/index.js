import { authModuleFactory, coursesModuleFactory } from './modules';
import $http from './httpClient';

const $api = {
  auth: authModuleFactory({ $http }),
  courses: coursesModuleFactory({ $http }),
};

export default $api;
