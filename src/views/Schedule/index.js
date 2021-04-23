import $api from '@/api';
import AppIcon from '@/components/shared/AppIcon';
import { useState } from 'react';
import { useEffect } from 'react';
import ScheduleCourse from './ScheduleCourse';
import ScheduleGridDays from './ScheduleGridDays';
import ScheduleGridHours from './ScheduleGridHours';
import './styles.scss';

const Schedule = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    $api.courses.fetchSchedule().then(setCourses);
  }, []);

  return (
    <main className="container py-4 mb-5">
      <div className="schedule">
        <div className="schedule__head d-flex align-items-center justify-content-between p-3">
          <p className="d-flex align-items-center">
            <AppIcon icon="calendar" className="ml-2" />
            برنامه هفتگی
          </p>

          <p>ترم ۶</p>
        </div>

        <div className="position-relative schedule__wrapper">
          <ScheduleGridDays />

          <div className="schedule__grid--main">
            {courses.length &&
              courses.map((c, i) => <ScheduleCourse key={i} {...c} />)}

            <ScheduleGridHours />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Schedule;
