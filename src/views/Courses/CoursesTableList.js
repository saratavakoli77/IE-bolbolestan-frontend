import LoadingContext from '@/contexts/loading';
import { fetchPickedCourses, pickCourse } from '@/store/slices/coursesSlice';
import handleError from '@/utils/handleError';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CoursesTableListItem from './CoursesTableListItem';
import { genIdForCourse } from './helpers';

function filterCourses(coursesArr, filters, pickedCoursesArr) {
  const pickedCoursesIds = {};
  pickedCoursesArr.forEach((c) => (pickedCoursesIds[genIdForCourse(c)] = true));

  return coursesArr
    .filter((c) => !pickedCoursesIds[genIdForCourse(c)])
    .filter((c) => c.type === filters.type || filters.type === 'all')
    .filter((c) => c.name.includes(filters.query));
}

const CoursesTableList = () => {
  const courses = useSelector((state) => state.courses.courses);
  const filters = useSelector((state) => state.courses.filters);
  const pickedCourses = useSelector((state) => state.courses.pickedCourses);

  const [filteredCourses, setFilteredCourses] = useState(courses);
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredCourses(filterCourses(courses, filters, pickedCourses));
  }, [courses, filters, pickedCourses]);

  const onPick = async (code, classCode) => {
    showLoading();

    dispatch(pickCourse({ code, classCode }))
      .then(unwrapResult)
      .then(dispatch(fetchPickedCourses()))
      .then(() => toast.success('عملیات با موفقیت انجام شد'))
      .catch(handleError)
      .finally(() => hideLoading());
  };

  return (
    <div className="labeled-box__content">
      <table className="table all-courses-table mb-0">
        <thead>
          <tr>
            <th></th>
            <th>کد</th>
            <th>ظرفیت</th>
            <th>نوع</th>
            <th>نام درس</th>
            <th>استاد</th>
            <th>واحد</th>
            <th>توضیحات</th>
          </tr>
        </thead>

        <tbody>
          {filteredCourses.map((c) => (
            <CoursesTableListItem
              key={c.code + c.classCode}
              onPick={onPick}
              {...c}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTableList;
