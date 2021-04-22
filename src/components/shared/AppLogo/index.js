import logo from './logo.png';

const AppLogo = ({ width = 50 }) => {
  return <img src={logo} alt="بلبلستان" style={{ width: `${width}px` }} />;
};

export default AppLogo;
