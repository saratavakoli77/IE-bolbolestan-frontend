import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '@/store/slices/coursesSlice';

const options = [
  {
    name: 'all',
    label: 'همه',
  },
  {
    name: 'Takhasosi',
    label: 'اختصاصی',
  },
  {
    name: 'Paaye',
    label: 'پایه',
  },
  {
    name: 'Asli',
    label: 'اصلی',
  },
  {
    name: 'Umumi',
    label: 'عمومی',
  },
];

const CoursesTableFilters = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.courses.filters.type);
  const changeOption = (type) => {
    dispatch(updateFilters({ type }));
  };

  return (
    <div className="course-filters">
      {options.map((o) => (
        <button
          key={o.name}
          className={`course-filters__item ${
            selectedOption === o.name && 'course-filters__item--active'
          }`}
          onClick={() => changeOption(o.name)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};

export default CoursesTableFilters;
