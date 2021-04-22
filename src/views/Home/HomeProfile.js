import InfoBox from '@/components/shared/InfoBox';
import { useSelector } from 'react-redux';
import HomeProfileAvatar from './HomeProfileAvatar';
import HomeProfileItem from './HomeProfileItem';

const HomeProfile = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="pt-4 pb-5 text-center">
      <HomeProfileAvatar avatar={user.img} />
      <ul className="mt-5 mb-3 ">
        <HomeProfileItem
          label="نام"
          value={`${user.name} ${user.secondName}`}
        />
        <HomeProfileItem label="شماره دانشجویی" value={user.studentId} />
        <HomeProfileItem label="تاریخ تولد" value={user.birthDate} />
        <HomeProfileItem label="معدل کل" value={user.gpa} />
        <HomeProfileItem label="واحد گذرانده" value={user.tpu} />
        <HomeProfileItem label="دانشکده" value={user.faculty} />
        <HomeProfileItem label="رشته" value={user.field} />
        <HomeProfileItem label="مقطع" value={user.level} />
      </ul>

      <InfoBox variant="primary" outlined>
        {user.status}
      </InfoBox>
    </div>
  );
};

export default HomeProfile;
