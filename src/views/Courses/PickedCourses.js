import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PickedCoursesList from './PickedCoursesList';
import LabeledBox from '@/components/shared/LabeledBox';
import { fetchPickedCourses } from '@/store/slices/coursesSlice';
import { toast } from 'react-toastify';
import PickedCoursesFooter from './PickedCoursesFooter';

const PickedCourses = () => {
  const pickedCourses = useSelector((state) => state.courses.pickedCourses);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchPickedCourses());
    } catch (err) {
      toast.error(err.message);
    }
  }, [dispatch]);

  return (
    <LabeledBox
      label="دروس انتخاب شده"
      className="mb-0"
      footer={PickedCoursesFooter}
    >
      {pickedCourses.length ? (
        <PickedCoursesList courses={pickedCourses} />
      ) : (
        <p>هنوز درسی انتخاب نشده است</p>
      )}
    </LabeledBox>
  );
};

export default PickedCourses;
