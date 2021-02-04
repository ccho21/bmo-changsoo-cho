import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from 'store/store';
import SearchLayout from './views/SearchLayout';
import ResultsLayout from './views/ResultsLayout';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={SearchLayout} />
            <Route path='/results' component={ResultsLayout} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
