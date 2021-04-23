const COURSES_ENDPOINT = 'courses';
const PICKED_COURSES_ENDPOINT = 'weekly_schedule';
const PICK_COURSE_ENDPOINT = (code, classCode) =>
  `courses/${code}/${classCode}`;
const SUBMIT_PICKED_COURSES_ENDPOINT = 'weekly_schedule/submit';

const coursesModuleFactory = ({ $http }) => ({
  fetchAllCourses() {
    return $http.get(COURSES_ENDPOINT).then((res) => res.offeringEntities);
  },
  fetchPickedCourses() {
    return $http.get(PICKED_COURSES_ENDPOINT).then((res) => ({
      units: res.units,
      courses: res.weeklyScheduleOfferings,
    }));
  },
  pickCourse(code, classCode) {
    return $http.post(PICK_COURSE_ENDPOINT(code, classCode));
  },
  submitPickedCourses() {
    return $http.post(SUBMIT_PICKED_COURSES_ENDPOINT);
  },
});

export default coursesModuleFactory;
