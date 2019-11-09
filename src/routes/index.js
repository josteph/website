import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '@components/Layout';

import HomeComponent from '@routes/Home';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomeComponent} />
      </Switch>
    </Layout>
  );
};

export default Routes;
