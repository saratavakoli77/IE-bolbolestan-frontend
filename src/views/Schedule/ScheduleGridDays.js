const DAYS = [
  'شنبه',
  'یک‌ شنبه',
  'دو شنبه',
  'سه شنبه',
  'چهار شنبه',
  'پنج شنبه',
];

const ScheduleGridDays = () => {
  return (
    <div className="schedule__grid--days">
      {['', ...DAYS].map((d, i) => (
        <div className="schedule__cell schedule__day" key={i}>
          <p>{d}</p>
        </div>
      ))}
    </div>
  );
};

export default ScheduleGridDays;
