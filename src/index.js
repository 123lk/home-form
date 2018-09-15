import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Salary from './Pages/Salary';
import Summary from './Pages/Summary';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/contact' component={Contact} />
      <Route path='/salary' component={Salary} />
      <Route path='/summary' component={Summary} />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
