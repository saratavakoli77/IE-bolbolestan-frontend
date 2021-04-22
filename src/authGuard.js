const authGuard = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.getItem('user')) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

export default authGuard;
