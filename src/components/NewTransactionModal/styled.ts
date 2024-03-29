import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #c7c7c7;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #12a454;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem; //space between button
`;

interface TransactionTypeProps {
  transactionType: 'income' | 'outcome';
}

export const TransactionType = styled.button<TransactionTypeProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 00.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
    background: ${props =>
      props.transactionType === 'income'
        ? lighten(0.5, '#12a454')
        : lighten(0.5, '#d70042')};
  }

  &.isActive {
    background: ${props =>
      props.transactionType === 'income'
        ? lighten(0.5, '#12a454')
        : lighten(0.5, '#d70042')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: #000;
  }
`;
