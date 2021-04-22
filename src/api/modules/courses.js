const COURSES_ENDPOINT = 'courses';

const coursesModuleFactory = ({ $http }) => ({
  fetchAllCourses() {
    return $http.get(COURSES_ENDPOINT).then((res) => res.offeringEntities);
  },
});

export default coursesModuleFactory;
