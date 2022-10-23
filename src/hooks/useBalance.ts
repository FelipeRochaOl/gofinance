import { useContext } from 'react';
import { Balance } from '../contexts/interfaces';
import { TransactionContext } from '../contexts/TransactionContext';

export function useBalance(): Balance {
  const { balance } = useContext(TransactionContext);
  return balance;
}
