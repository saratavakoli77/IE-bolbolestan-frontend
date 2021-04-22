import HeaderLink from './HeaderLink';
import AppLogo from '@/components/shared/AppLogo';

import './styles.scss';

const Header = () => {
  return (
    <header className="header sticky-top bg-white">
      <nav className="container">
        <ul className="nav align-items-center">
          <li className="nav-item">
            <HeaderLink link="/">
              <AppLogo />
            </HeaderLink>
          </li>

          <li className="nav-item">
            <HeaderLink link="/courses" label="انتخاب واحد" />
          </li>

          <li className="nav-item">
            <HeaderLink link="/schedule" label="برنامه هفتگی" />
          </li>

          <li className="nav-item mr-auto">
            <HeaderLink
              label="خروج"
              icon="log-out"
              className="text-danger d-flex align-items-center"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
