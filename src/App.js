import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorView from '@components/ErrorView';

import Routes from '@route-gateway';

function App() {
  return (
    <ErrorBoundary render={() => <ErrorView />}>
      <Router>
        <Routes />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
