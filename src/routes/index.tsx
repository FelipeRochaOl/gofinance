import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewTransactionModal from '../components/NewTransactionModal';
import { TransactionProvider } from '../contexts/TransactionContext';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Routes: React.FC = () => {
  return (
    <TransactionProvider>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/import" component={Import} />
      </Switch>
      <NewTransactionModal />
    </TransactionProvider>
  );
};

export default Routes;
