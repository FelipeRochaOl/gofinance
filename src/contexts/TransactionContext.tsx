import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import formatValue from '../utils/formatValue';
import {
  TransactionContextType,
  TransactionProviderProps,
  Balance,
  Transaction,
  TransactionInput,
} from './interfaces';

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({
  children,
}: TransactionProviderProps): JSX.Element {
  const [openNewTransactionModal, setOpenNewTransactionModal] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  function handleOpenNewTransactionModal(): void {
    setOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal(): void {
    setOpenNewTransactionModal(false);
  }

  async function fetchTransactions(): Promise<void> {
    const getData = await api.get('/transactions');
    if (getData) {
      const { transactions: transactionsData, balance: balanceData } =
        await getData.data;
      const transactionsFormat = transactionsData.map(
        (transaction: Transaction) => {
          const { type, value, created_at } = transaction;
          transaction.formattedValue =
            type === 'income' ? formatValue(value) : `- ${formatValue(value)}`;
          transaction.formattedDate = new Intl.DateTimeFormat('pt-BR').format(
            new Date(created_at),
          );
          return transaction;
        },
      );
      setTransactions(transactionsFormat);
      setBalance({
        income: formatValue(balanceData.income),
        outcome: formatValue(balanceData.outcome),
        total: formatValue(balanceData.total),
      });
    }
  }

  async function createTransaction(
    transaction: TransactionInput,
  ): Promise<void> {
    const response = await api.post('/transactions', {
      ...transaction,
      created_at: new Date(),
    });
    if (response.statusText === 'OK') {
      await fetchTransactions();
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        modal: {
          openNewTransactionModal,
          handleOpenNewTransactionModal,
          handleCloseNewTransactionModal,
        },
        transaction: {
          transactions,
          createTransaction,
          fetchTransactions,
        },
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
