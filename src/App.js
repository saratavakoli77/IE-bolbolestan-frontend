import { BrowserRouter as Router, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import LayoutResolver from '@/components/core/LayoutResolver';

import Login from '@/views/Login';
import Register from '@/views/Register';
import Home from '@/views/Home';

import '@/styles/App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <LayoutResolver path="/login" component={Login} layout="auth" />
          <LayoutResolver path="/register" component={Register} layout="auth" />

          <LayoutResolver path="/" exact component={Home} />
        </Switch>
      </Router>

      <ToastContainer />
    </Provider>
  );
}

export default App;
