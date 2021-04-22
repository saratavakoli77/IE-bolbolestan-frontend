import InfoBox from '@/components/shared/InfoBox';
import { mapCourseTypeToLabel } from './helpers';

const mapCourseTypeToInfoBoxVariant = {
  Asli: 'success',
  Paaye: 'danger-filled',
  Umumi: 'yellow',
  Takhasosi: 'primary',
};

const CoursesTableListItem = ({
  code,
  classCode,
  units,
  instructor,
  name,
  capacity,
  registered,
  type,
}) => {
  return (
    <tr>
      <td>
        <button className="btn btn-gray btn--icon btn--small">
          <i className="flaticon-clock-circular-outline"></i>
        </button>
      </td>
      <td>
        {code}-{classCode}
      </td>
      <td>
        <span className="font-weight-bold">
          {registered}/{capacity}
        </span>
      </td>
      <td className="px-1">
        <InfoBox
          variant={mapCourseTypeToInfoBoxVariant[type]}
          block
          className="text-white text-center"
        >
          {mapCourseTypeToLabel[type]}
        </InfoBox>
      </td>
      <td>{name}</td>
      <td>{instructor}</td>
      <td>{units}</td>
      <td></td>
    </tr>
  );
};

export default CoursesTableListItem;
