import React from 'react';

const HOURS_RANGE = [...Array(11).keys()].map((h) => h + 7);

function ensureTwoDigits(input) {
  const str = String(input);

  return str.length < 2 ? `0${str}` : str;
}

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
            {ensureTwoDigits(h + 1)} - {ensureTwoDigits(h)}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ScheduleGridHours;
