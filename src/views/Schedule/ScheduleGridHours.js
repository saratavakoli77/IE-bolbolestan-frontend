import React from 'react';
import { formatFaNumbers } from '@/utils/number';

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
            {formatFaNumbers(ensureTwoDigits(h + 1))} - {formatFaNumbers(ensureTwoDigits(h))}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ScheduleGridHours;
