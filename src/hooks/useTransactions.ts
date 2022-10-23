import { useContext } from 'react';
import { TransactionModel } from '../contexts/interfaces';
import { TransactionContext } from '../contexts/TransactionContext';

export function useTransactions(): TransactionModel {
  const { transaction } = useContext(TransactionContext);
  return transaction;
}
