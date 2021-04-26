import AppBtn from '@/components/shared/AppBtn';
import AppIcon from '@/components/shared/AppIcon';
import InfoBox from '@/components/shared/InfoBox';
import { genIdForCourse, mapCourseTypeToLabel } from './helpers';
import ReactTooltip from 'react-tooltip';
import CoursesTableListItemTooltip from './CoursesTableListItemTooltip';
import { useEffect } from 'react';

const mapCourseTypeToInfoBoxVariant = {
  Asli: 'success-dark',
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
  classTimeDays,
  formattedClassDate,
  examTimeStart,
  examTimeEnd,
}) => {
  const isFull = capacity === registered;
  const icon = {
    variant: isFull ? 'gray' : 'success-dark',
    icon: isFull ? 'clock-circular-outline' : 'add',
  };
  const id = genIdForCourse({ code, classCode });

  useEffect(() => {
    ReactTooltip.rebuild();
  });

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
      <td data-tip data-for={id} className="pointer">
        {units}

        <ReactTooltip
          className="CoursesTableListItem__tooltip"
          id={id}
          place="left"
        >
          <CoursesTableListItemTooltip
            {...{
              classTimeDays,
              formattedClassDate,
              examTimeStart,
              examTimeEnd,
            }}
          />
        </ReactTooltip>
      </td>
      <td></td>
    </tr>
  );
};

export default CoursesTableListItem;
