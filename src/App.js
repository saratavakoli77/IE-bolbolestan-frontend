import '@/styles/App.scss';
import { BrowserRouter, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { GuardProvider } from 'react-router-guards';
import LayoutResolver from '@/components/core/LayoutResolver';
import authGuard from './authGuard';

import Login from '@/views/Login';
import Register from '@/views/Register';
import Home from '@/views/Home';
import Courses from '@/views/Courses';
import ForgotPassword from '@/views/ForgotPassword';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingContext from '@/contexts/loading';
import { useState } from 'react';
import AppLoading from '@/components/core/AppLoading';
import Schedule from './views/Schedule';

function App() {
  const [loading, setLoading] = useState(false);
  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <Provider store={store}>
      <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
        <BrowserRouter>
          <GuardProvider guards={[authGuard]}>
            <Switch>
              <LayoutResolver
                path="/login"
                component={Login}
                layout="auth"
                title="ورود"
                meta={{ guest: true }}
              />
              <LayoutResolver
                path="/register"
                component={Register}
                layout="auth"
                title="ثبت نام"
                meta={{ guest: true }}
              />
              <LayoutResolver
                path="/forgot-password"
                component={ForgotPassword}
                layout="auth"
                title="فراموشی رمز عبور"
                meta={{ guest: true }}
              />
              <LayoutResolver
                path="/"
                exact
                component={Home}
                title="خانه"
                meta={{ auth: true }}
              />
              <LayoutResolver
                path="/courses"
                component={Courses}
                title="انتخاب واحد"
                meta={{ auth: true }}
              />
              <LayoutResolver
                path="/schedule"
                component={Schedule}
                title="برنامه هفتگی"
                meta={{ auth: true }}
              />
            </Switch>
          </GuardProvider>
        </BrowserRouter>

        <ToastContainer />
        {loading && <AppLoading />}
      </LoadingContext.Provider>
    </Provider>
  );
}

export default App;
