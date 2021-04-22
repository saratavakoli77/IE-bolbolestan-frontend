import { useSelector } from 'react-redux';
import HomeReportsListItem from './HomeReportsListItem';

const HomeReportsList = () => {
  const { courses } = useSelector((state) => state.user.user);

  return (
    <div>
      <HomeReportsListItem termNumber="1" courses={courses} />
    </div>
  );
};

export default HomeReportsList;
