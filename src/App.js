import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorView from '@components/ErrorView';

import Routes from '@route-gateway';

function App({ history }) {
  return (
    <ErrorBoundary render={() => <ErrorView />}>
      <Router>
        <Routes />
      </Router>
    </ErrorBoundary>
  );
}

App.propTypes = {
  history: object.isRequired,
};

export default App;
