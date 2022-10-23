import React from 'react';

export interface TransactionModalContextType {
  openNewTransactionModal: boolean;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
}

export interface TransactionModel {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
  fetchTransactions: () => void;
}

export interface TransactionContextType {
  modal: TransactionModalContextType;
  transaction: TransactionModel;
  balance: Balance;
}

export interface TransactionProviderProps {
  children: React.ReactNode;
}

export interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

export interface TransactionInput {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

export interface Balance {
  income: string;
  outcome: string;
  total: string;
}
