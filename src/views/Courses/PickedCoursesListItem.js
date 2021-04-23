const PickedCoursesListItem = ({
  code,
  classCode,
  name,
  instructor,
  units,
}) => {
  return (
    <tr>
      <td>
        <i className="flaticon-trash-bin text-danger selected-courses__remove"></i>
      </td>
      <td className="px-4">
        <span className="info-box info-box--success info-box--outlined info-box--block">
          ثبت شده
        </span>
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
