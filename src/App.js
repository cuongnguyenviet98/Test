import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';

const MyPage = React.lazy(() => import('./pages/myPage'));
const NotFound = () => <h1>404 - Page Not Found</h1>;

const App = () => {
  return (

    <div id="container-main-page">
      <Router>
        <Switch>
        <Route exact path="/" component={MyPage} />

        <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
