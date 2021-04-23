import { useSelector } from 'react-redux';
import HomeReportsListItem from './HomeReportsListItem';

const HomeReportsList = () => {
  const { courses: reports } = useSelector((state) => state.user.user);

  return (
    <div>
      {Object.entries(reports).map(([termNumber, courses]) => (
        <HomeReportsListItem
          key={termNumber}
          termNumber={termNumber}
          courses={courses}
        />
      ))}
    </div>
  );
};

export default HomeReportsList;
