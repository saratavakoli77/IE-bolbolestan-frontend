import AppIcon from '@/components/shared/AppIcon';
import InfoBox from '@/components/shared/InfoBox';

const statusTextMap = {
  waiting: 'در انتظار',
  finalized: 'ثبت نهایی',
  'non-finalized': 'ثبت نهایی نشده',
};

const statusVariantMap = {
  waiting: 'gray',
  finalized: 'success',
  'non-finalized': 'primary',
};

const PickedCoursesListItem = ({
  code,
  classCode,
  name,
  instructor,
  units,
  onRemove,
  status,
}) => {
  return (
    <tr>
      <td>
        <AppIcon
          icon="trash-bin"
          className=" text-danger selected-courses__remove"
          onClick={() => onRemove({ code, classCode })}
        />
      </td>
      <td className="px-4">
        <InfoBox variant={statusVariantMap[status]} outlined block>
          {statusTextMap[status]}
        </InfoBox>
      </td>
      <td>
        {code}-{classCode}
      </td>
      <td>{name}</td>
      <td>{instructor}</td>
      <td>
        <span className="text-primary-dark font-weight-bold">{units}</span>
      </td>
    </tr>
  );
};

export default PickedCoursesListItem;
