import { formatFaNumbers } from '@/utils/number';

const HomeProfileItem = ({ label, value }) => (
  <li className="profile__info-item text-center">
    <span className="text-primary">{label}: </span>
    <span>{formatFaNumbers(value)}</span>
  </li>
);

export default HomeProfileItem;
