import React from 'react';
import { mapCourseTypeToLabel } from '../Courses/helpers';

const ScheduleCourse = ({ name, classTime, weekDays, type }) => {
  const [start, end] = classTime.split('-');

  return (
    <React.Fragment>
      {weekDays.map((day) => (
        <div
          key={classTime + day}
          className="schedule__cell schedule__course"
          data-type={type}
          data-day={day.slice(0, 3).toLowerCase()}
          data-h-start={start.replace(/:00$/gi, '').replace(/^0/gi, '')}
          data-h-end={end.replace(/:00$/gi, '').replace(/^0/gi, '')}
        >
          <p>{classTime}</p>
          <p>{name}</p>
          <p>{mapCourseTypeToLabel[type]}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ScheduleCourse;
