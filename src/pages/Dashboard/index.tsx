/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-param-reassign */
import React from 'react';

import Header from '../../components/Header';
import { Summary } from '../../components/Summary';
import { ListTransactions } from '../../components/ListTransactions';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Summary />
        <ListTransactions />
      </Container>
    </>
  );
};

export default Dashboard;
