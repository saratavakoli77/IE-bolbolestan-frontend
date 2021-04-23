import AppBtn from '@/components/shared/AppBtn';
import AppIcon from '@/components/shared/AppIcon';
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
  onPick,
}) => {
  const isFull = capacity === registered;
  const icon = {
    variant: isFull ? 'gray' : 'success-dark',
    icon: isFull ? 'clock-circular-outline' : 'add',
  };

  return (
    <tr>
      <td>
        <AppBtn
          variant={icon.variant}
          small
          icon
          onClick={() => onPick(code, classCode)}
        >
          <AppIcon icon={icon.icon} />
        </AppBtn>
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
