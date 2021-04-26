import $api from '@/api';
import LoadingContext from '@/contexts/loading';
import { fetchPickedCourses } from '@/store/slices/coursesSlice';
import handleError from '@/utils/handleError';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { genIdForCourse } from './helpers';
import PickedCoursesListItem from './PickedCoursesListItem';

const PickedCoursesList = ({ courses }) => {
  const dispatch = useDispatch();
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const removeCourse = async ({ code, classCode }) => {
    showLoading();

    try {
      await $api.courses.removeCourse(code, classCode);
      await dispatch(fetchPickedCourses());
      toast.success('عملیات با موفقیت انجام شد');
    } catch (err) {
      handleError(err);
    } finally {
      hideLoading();
    }
  };

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
          <PickedCoursesListItem
            key={genIdForCourse(c)}
            {...c}
            onRemove={removeCourse}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PickedCoursesList;
