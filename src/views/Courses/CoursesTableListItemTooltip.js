import { formatDate } from '@/utils/date';
import { formatFaNumbers } from '@/utils/number';

const mapEnDayToFa = {
  Saturday: 'شنبه',
  Sunday: 'یک شنبه',
  Monday: 'دو شنبه',
  Tuesday: 'سه شنبه',
  Wednesday: 'چهارشنبه',
  Thursday: 'پنج شنبه',
};

const CoursesTableListItemTooltip = ({
  classTimeDays,
  formattedClassDate,
  examTimeStart,
  examTimeEnd,
  prerequisiteNames = [],
}) => {
  return (
    <div className="text-center flex-column justify-content-center align-items-center">
      <p>{formatFaNumbers(formattedClassDate)}</p>
      <p>{classTimeDays.map((d) => mapEnDayToFa[d]).join(' - ')}</p>
      <hr />
      {(function () {
        if (prerequisiteNames.length) {
          return <b>پیش نیازی ها</b>;
        }
      })()}
      {prerequisiteNames.map((name, i) => (
        <p key={i}>{name}</p>
      ))}
      <b>امتحان</b>
      <p>
        {formatFaNumbers(formatDate(examTimeStart, 'HH:mm'))}-{formatFaNumbers(formatDate(examTimeEnd, 'HH:mm'))}
        <span className="ml-2">{formatFaNumbers(formatDate(examTimeStart, 'YYYY/MM/DD'))}</span>
      </p>
    </div>
  );
};

export default CoursesTableListItemTooltip;
