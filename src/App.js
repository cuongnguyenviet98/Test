import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

const MyPage = React.lazy(() => import('./pages/myPage'));
const MyRecord = React.lazy(() => import('./pages/myRecord'));
const MyColumn = React.lazy(() => import('./pages/myColumn'));
const NotFound = () => <h1>404 - Page Not Found</h1>;

const App = () => {

  return (
    <div id="container-main-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MyPage} />
            <Route exact path="/my-record" component={MyRecord} />
            <Route exact path="/my-column" component={MyColumn} />

            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </div>
  )
}

export default App;
