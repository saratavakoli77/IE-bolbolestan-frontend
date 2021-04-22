import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSelector } from 'react-redux';

const DefaultLayout = ({ children }) => {
  const user = useSelector((state) => state?.user?.user);

  if (!user) {
    return <div />;
  }

  return (
    <div className="DefaultLayout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
