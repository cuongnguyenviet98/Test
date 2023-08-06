import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

const MyPage = React.lazy(() => import('./pages/myPage'));
const NotFound = () => <h1>404 - Page Not Found</h1>;

const App = () => {
  return (

    <div id="container-main-page">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={MyPage} />

          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
