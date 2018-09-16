import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Name from './Pages/Name';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Salary from './Pages/Salary';
import Summary from './Pages/Summary';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import formReducer from './reducers/formReducer';

const logger  = createLogger();
const reducer = combineReducers({
  formReducer
});

const store = createStore(
  reducer, 
  compose(
  applyMiddleware(thunk, logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Name} />
        <Route path='/contact' component={Contact} />
        <Route path='/salary' component={Salary} />
        <Route path='/summary' component={Summary} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
