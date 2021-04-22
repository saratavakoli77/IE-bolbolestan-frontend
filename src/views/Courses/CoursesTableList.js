import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CoursesTableListItem from './CoursesTableListItem';

function filterCourses(coursesArr, filters) {
  return coursesArr
    .filter((c) => c.type === filters.type || filters.type === 'all')
    .filter((c) => c.name.includes(filters.query));
}

const CoursesTableList = () => {
  const courses = useSelector((state) => state.courses.courses);
  const filters = useSelector((state) => state.courses.filters);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    setFilteredCourses(filterCourses(courses, filters));
  }, [courses, filters]);

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
            <CoursesTableListItem key={c.code + c.classCode} {...c} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTableList;
