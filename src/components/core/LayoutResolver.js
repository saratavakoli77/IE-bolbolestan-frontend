import { Route } from 'react-router-dom';

import AuthLayout from '@/layouts/Auth';
import DefaultLayout from '@/layouts/Default';
import { useEffect } from 'react';

const layouts = {
  auth: AuthLayout,
};

const LayoutResolver = ({ component: Component, layout, title, ...props }) => {
  const ActiveLayout = layouts[layout] || DefaultLayout;
  useEffect(() => {
    document.title = ['بلبلستان', title].filter(Boolean).join(' | ');
  }, [title]);

  return (
    <Route {...props}>
      <ActiveLayout>
        <Component />
      </ActiveLayout>
    </Route>
  );
};

export default LayoutResolver;
