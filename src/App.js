import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Articles from './containers/Articles/Articles';
import Chart from './containers/Chart/Chart';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Articles} />
          <Route path="/chart" exact component={Chart} />
        </Switch>
      </div>
    </>
  );
}

export default App;
