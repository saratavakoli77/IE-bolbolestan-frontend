import { Route } from 'react-router-dom';

import AuthLayout from '@/layouts/Auth';
import DefaultLayout from '@/layouts/Default';

const layouts = {
  auth: AuthLayout,
};

const LayoutResolver = ({ component: Component, layout, ...props }) => {
  const ActiveLayout = layouts[layout] || DefaultLayout;

  return (
    <Route {...props}>
      <ActiveLayout>
        <Component />
      </ActiveLayout>
    </Route>
  );
};

export default LayoutResolver;
