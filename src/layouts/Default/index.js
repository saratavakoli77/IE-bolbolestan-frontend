import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="DefaultLayout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
