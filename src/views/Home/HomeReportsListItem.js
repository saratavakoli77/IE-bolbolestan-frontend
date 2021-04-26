import InfoBox from '@/components/shared/InfoBox';
import LabeledBox from '@/components/shared/LabeledBox';
import { useEffect } from 'react';
import { useState } from 'react';

const HomeReportsListItem = ({ termNumber, courses }) => {
  const [average, setAverage] = useState(0);

  const calcAverage = () => {
    const totalUnits = courses.reduce((sum, c) => (sum += c.unit), 0);
    const sum = courses.reduce((total, c) => (total += c.unit * c.grade), 0);

    setAverage(sum / totalUnits);
  };

  useEffect(calcAverage, [courses]);

  return (
    <LabeledBox label={`کارنامه ترم ${termNumber}`}>
      <ol className="report">
        {courses.map((c, indx) => (
          <li className="report__item" key={indx}>
            <div className="report__cell row-number">{indx + 1}</div>
            <div className="report__cell">{c.code}</div>
            <div className="report__cell">
              <span className="text-truncate">{c.name}</span>
            </div>
            <div className="report__cell">{c.unit} واحد</div>
            <div className="report__cell">
              <InfoBox variant="success" block>
                {c.state}
              </InfoBox>
            </div>
            <div className="report__cell text-success">{c.grade}</div>
          </li>
        ))}
      </ol>

      <div className="d-flex justify-content-end mt-3">
        <InfoBox variant="primary" outlined>
          معدل: {average}
        </InfoBox>
      </div>
    </LabeledBox>
  );
};

export default HomeReportsListItem;
