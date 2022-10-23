import React, { useState } from 'react';
import Modal from 'react-modal';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import closeSvg from '../../assets/close.svg';
import { Container, TransactionType, TransactionTypeContainer } from './styled';
import { useModal } from '../../hooks/useModal';
import { useTransactions } from '../../hooks/useTransactions';
import { TransactionInput } from '../../contexts/interfaces';

const NewTransactionModal: React.FC = () => {
  const { openNewTransactionModal, handleCloseNewTransactionModal } =
    useModal();
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState<'income' | 'outcome'>('income');
  const [category, setCategory] = useState('');

  function handleType(value: 'income' | 'outcome'): void {
    setType(value);
  }
  function handleTitle(value: string): void {
    setTitle(value);
  }
  function handlePrice(value: number): void {
    if (value < 0) {
      setPrice(0);
      return;
    }
    setPrice(value);
  }
  function handleCategory(value: string): void {
    setCategory(value);
  }
  function handleNewTransaction(event: React.FormEvent): void {
    event.preventDefault();
    const data: TransactionInput = {
      title,
      value: price,
      type,
      category,
    };
    createTransaction(data);
    setTitle('');
    setPrice(0);
    setType('income');
    setCategory('');
    handleCloseNewTransactionModal();
  }

  return (
    <Modal
      isOpen={openNewTransactionModal}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={handleCloseNewTransactionModal}
      >
        <img src={closeSvg} alt="Fechar modal" />
      </button>
      <Container onSubmit={evt => handleNewTransaction(evt)}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={evt => handleTitle(evt.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          onChange={evt => handlePrice(Number(evt.target.value))}
        />
        <TransactionTypeContainer>
          <TransactionType
            type="button"
            transactionType="income"
            className={type === 'income' ? 'isActive' : ''}
            onClick={() => handleType('income')}
          >
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </TransactionType>
          <TransactionType
            type="button"
            transactionType="outcome"
            className={type === 'outcome' ? 'isActive' : ''}
            onClick={() => handleType('outcome')}
          >
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </TransactionType>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={evt => handleCategory(evt.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;
