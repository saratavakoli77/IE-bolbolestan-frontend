const LOGIN_ENDPOINT = (id) => `login?studentId=${id}`;
const PROFILE_ENDPOINT = 'profile';

const authModuleFactory = ({ $http }) => ({
  login(id) {
    return $http.post(LOGIN_ENDPOINT(id));
  },
  fetchProfile() {
    return $http.get(PROFILE_ENDPOINT);
  },
});

export default authModuleFactory;
