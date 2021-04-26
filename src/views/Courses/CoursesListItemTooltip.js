const mapEnDayToFa = {
  Saturday: 'شنبه',
  Sunday: 'یک شنبه',
  Monday: 'دو شنبه',
  Tuesday: 'سه شنبه',
  Wednesday: 'چهارشنبه',
  Thursday: 'پنج شنبه',
};

const CoursesListItemTooltip = ({ classTimeDays, formattedClassDate }) => {
  return (
    <div className="text-center flex-column justify-content-center align-items-center">
      <p>{formattedClassDate}</p>
      <p>{classTimeDays.map((d) => mapEnDayToFa[d]).join(' - ')}</p>
      <hr />
      <b>پیش نیازی ها</b>
      <p>برنامه سازی پیشرفته</p>
      <b>امتحان</b>
      <p>09:00 - 12:45</p>
    </div>
  );
};

export default CoursesListItemTooltip;
