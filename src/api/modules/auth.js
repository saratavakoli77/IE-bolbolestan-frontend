import storage from '@/utils/storage';

const LOGIN_ENDPOINT = 'login';
const PROFILE_ENDPOINT = 'profile';
const LOGOUT_ENDPOINT = 'logout';
const REGISTER_ENDPOINT = 'signup';
const FORGOT_PASSWORD_ENDPOINT = 'forgot-password';

const authModuleFactory = ({ $http }) => ({
  login(email, password) {
    return $http
      .post(LOGIN_ENDPOINT, {
        email,
        password,
      })
      .then(({ jwt }) => storage.setItem('bolbolestan-token', jwt));
  },
  fetchProfile() {
    return $http.get(PROFILE_ENDPOINT);
  },
  logout() {
    return $http
      .post(LOGOUT_ENDPOINT)
      .then(() => storage.removeItem('bolbolestan-token'));
  },
  register({
    firstName,
    lastName,
    studentId,
    birthDate,
    faculty,
    field,
    level,
    email,
    password,
  }) {
    return $http.post(REGISTER_ENDPOINT, {
      id: studentId,
      name: firstName,
      secondName: lastName,
      birthDate: birthDate,
      field,
      faculty,
      level,
      email,
      password,
    });
  },
  forgotPassword(email) {
    return $http.post(FORGOT_PASSWORD_ENDPOINT, { email });
  },
});

export default authModuleFactory;
