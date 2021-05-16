const LOGIN_ENDPOINT = 'login';
const PROFILE_ENDPOINT = 'profile';
const LOGOUT_ENDPOINT = 'logout';
const REGISTER_ENDPOINT = 'signup';

const authModuleFactory = ({ $http }) => ({
  login(id) {
    return $http.post(LOGIN_ENDPOINT, {
      studentId: id,
    });
  },
  fetchProfile() {
    return $http.get(PROFILE_ENDPOINT);
  },
  logout() {
    return $http.post(LOGOUT_ENDPOINT);
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
});

export default authModuleFactory;
