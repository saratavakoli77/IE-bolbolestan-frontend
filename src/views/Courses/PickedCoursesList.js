import { genIdForCourse } from './helpers';
import PickedCoursesListItem from './PickedCoursesListItem';

const PickedCoursesList = ({ courses }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th></th>
          <th>وضعیت</th>
          <th>کد</th>
          <th>نام درس</th>
          <th>استاد</th>
          <th>واحد</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((c) => (
          <PickedCoursesListItem key={genIdForCourse(c)} {...c} />
        ))}
      </tbody>
    </table>
  );
};

export default PickedCoursesList;
