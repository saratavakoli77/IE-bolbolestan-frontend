import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LayoutResolver from '@/components/core/LayoutResolver';

import Login from '@/views/Login';
import Register from '@/views/Register';
import Home from '@/views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <LayoutResolver path="/login" component={Login} layout="auth" />
        <LayoutResolver path="/register" component={Register} layout="auth" />

        <LayoutResolver path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
