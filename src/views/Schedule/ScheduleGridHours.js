import React from 'react';

const HOURS_RANGE = [...Array(10).keys()].map((h) => h + 7);

const ScheduleGridHours = () => {
  return (
    <React.Fragment>
      {HOURS_RANGE.map((h, i) => (
        <div
          className="schedule__cell schedule__time"
          key={i}
          data-h-start={h}
          data-h-end={h + 1}
        >
          <p>
            {h + 1} - {h}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ScheduleGridHours;
