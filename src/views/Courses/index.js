import $api from '@/api';
import { setCourses } from '@/store/slices/coursesSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CoursesTable from './CoursesTable';
import SearchCourses from './SearchCourses';
import PickedCourses from './PickedCourses';
import './styles.scss';

const Courses = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchData = () => {
    setLoading(true);

    $api.courses.fetchAllCourses().then((courses) => {
      dispatch(setCourses(courses));
      setLoading(false);
    });
  };

  useEffect(fetchData, []);

  if (loading) {
    return <div></div>;
  }

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
