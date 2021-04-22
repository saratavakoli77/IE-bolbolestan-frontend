import HeaderLink from './HeaderLink';
import AppLogo from '@/components/shared/AppLogo';

import './styles.scss';
import { useHistory, useRouteMatch } from 'react-router';
import $api from '@/api';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/userSlice';

const links = [
  {
    to: '/',
    label: 'خانه',
  },
  {
    to: '/courses',
    label: 'انتخاب واحد',
  },
  {
    to: '/schedule',
    label: 'برنامه هفتگی',
  },
];

const Header = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    $api.auth.logout();
    dispatch(logout());
    history.push('/login');
  };

  return (
    <header className="header sticky-top bg-white">
      <nav className="container">
        <ul className="nav align-items-center">
          <HeaderLink to="/">
            <AppLogo />
          </HeaderLink>

          {links
            .filter((l) => l.to !== match.path)
            .map((l, indx) => (
              <li className="nav-item" key={indx}>
                <HeaderLink to={l.to} label={l.label} />
              </li>
            ))}

          <li className="nav-item mr-auto">
            <HeaderLink
              label="خروج"
              icon="log-out"
              className="text-danger"
              onClick={onLogout}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
