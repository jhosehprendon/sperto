import React from 'react';
import { Route, Router } from 'react-router-dom';

import history from './history';
import Home from './components/Home';
import Header from './components/Header';
import RemarketingCase from './components/RemarketingCase';
import RemarketingCaseGracias from './components/RemarketingCaseGracias'

const App = () => (
  <Router history={history}>
      <Header />
      <Route path="/" exact component={Home}/>
      <Route path="/case-remarketing" exact component={RemarketingCase} />
      <Route path="/case-remarketing/gracias" component={RemarketingCaseGracias} />
  </Router>
);


export default App;
