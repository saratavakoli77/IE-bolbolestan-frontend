import Footer from '@/components/layout/Footer';
import Card from 'react-bootstrap/Card';
import './styles.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className="AuthLayout">
      <Card style={{ width: '25rem' }}>
        <Card.Body>{children}</Card.Body>
      </Card>
      <Footer />
    </div>
  );
};

export default AuthLayout;
