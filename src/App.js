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

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
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
          </Switch>
        </GuardProvider>
      </BrowserRouter>

      <ToastContainer />
    </Provider>
  );
}

export default App;
