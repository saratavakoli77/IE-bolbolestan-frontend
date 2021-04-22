import AppIcon from '@/components/shared/AppIcon';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom w-100 text-white py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <p className="mb-0">&#9400; دانشگاه تهران - سامانه جامع بلبلستان</p>

        <nav>
          <ul className="d-flex align-items-center p-0 m-0">
            <li className="d-flex">
              <a href="/" className="d-inline-flex">
                <AppIcon
                  icon="twitter-logo-on-black-background"
                  className="footer__icon"
                />
              </a>
            </li>
            <li className="d-flex">
              <a href="/" className="d-inline-flex">
                <AppIcon icon="facebook" className="footer__icon" />
              </a>
            </li>
            <li className="d-flex">
              <a href="/" className="d-inline-flex">
                <AppIcon icon="instagram" className="footer__icon" />
              </a>
            </li>
            <li className="d-flex">
              <a href="/" className="d-inline-flex">
                <AppIcon icon="linkedin-logo" className="footer__icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
