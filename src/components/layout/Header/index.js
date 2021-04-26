import HeaderLink from './HeaderLink';
import AppLogo from '@/components/shared/AppLogo';

import './styles.scss';
import { useHistory, useRouteMatch } from 'react-router';
import $api from '@/api';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slices/userSlice';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AppBtn from '@/components/shared/AppBtn';

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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

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
              onClick={openModal}
            />

            <Modal show={showModal} onHide={hideModal} centered>
              <Modal.Body>
                آیا میخواهید از حساب کاربری خود خارج شوید ؟
              </Modal.Body>
              <Modal.Footer>
                <AppBtn variant="gray" outlined onClick={hideModal}>
                  انصراف
                </AppBtn>
                <AppBtn variant="success" onClick={onLogout}>
                  خروج
                </AppBtn>
              </Modal.Footer>
            </Modal>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
