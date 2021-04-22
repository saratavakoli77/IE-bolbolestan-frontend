import storage from './utils/storage';

const authGuard = (to, from, next) => {
  if (to.meta.auth) {
    if (storage.getItem('user')) {
      next();
    }
    next.redirect('/login');
  } else if (to.meta.guest) {
    if (storage.getItem('user')) {
      next.redirect('/');
    }
    next();
  } else {
    next();
  }
};

export default authGuard;
