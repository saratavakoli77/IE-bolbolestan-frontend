const LOGIN_ENDPOINT = 'login';
const PROFILE_ENDPOINT = 'profile';
const LOGOUT_ENDPOINT = 'logout';

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
});

export default authModuleFactory;
