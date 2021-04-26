import $api from '@/api';
import { setCourses } from '@/store/slices/coursesSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CoursesTable from './CoursesTable';
import SearchCourses from './SearchCourses';
import PickedCourses from './PickedCourses';
import './styles.scss';
import { useContext } from 'react';
import LoadingContext from '@/contexts/loading';

const Courses = () => {
  const dispatch = useDispatch();
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const fetchData = () => {
    showLoading();

    $api.courses.fetchAllCourses().then((courses) => {
      dispatch(setCourses(courses));
      hideLoading();
    });
  };

  useEffect(fetchData, []);

  return (
    <div className="container py-5">
      <PickedCourses />
      <div className="my-4">
        <SearchCourses />
      </div>
      <CoursesTable />
    </div>
  );
};

export default Courses;
