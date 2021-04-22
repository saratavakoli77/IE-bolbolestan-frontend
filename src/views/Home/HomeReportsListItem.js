import LabeledBox from '@/components/shared/LabeledBox';

const HomeReportsListItem = ({ termNumber, courses }) => {
  return (
    <LabeledBox label={`کارنامه ترم ${termNumber}`}>
      <ol className="report">
        {courses.map((c, indx) => (
          <li className="report__item" key={indx}>
            <div className="report__cell row-number">{indx + 1}</div>
            <div className="report__cell">{c.offeringCode}</div>
            <div className="report__cell">
              <span className="text-truncate">
                طراحی و ساخت کامپایلر خیلی پیشرفته
              </span>
            </div>
            <div className="report__cell">۳ واحد</div>
            <div className="report__cell">
              <span className="info-box info-box--block info-box--success">
                قبول
              </span>
            </div>
            <div className="text-success">{c.grade}</div>
          </li>
        ))}
      </ol>
    </LabeledBox>
  );
};

export default HomeReportsListItem;
