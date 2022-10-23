import { useContext } from 'react';
import { TransactionModalContextType } from '../contexts/interfaces';
import { TransactionContext } from '../contexts/TransactionContext';

export function useModal(): TransactionModalContextType {
  const { modal } = useContext(TransactionContext);
  return modal;
}
