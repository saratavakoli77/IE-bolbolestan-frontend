import LabeledBox from '@/components/shared/LabeledBox';
import CoursesTableFilters from './CoursesTableFilters';
import CoursesTableList from './CoursesTableList';

const CoursesTable = () => {
  return (
    <LabeledBox
      label="دروس ارائه شده"
      header={CoursesTableFilters}
      className="pb-0 mb-5"
    >
      <CoursesTableList />
    </LabeledBox>
  );
};

export default CoursesTable;
