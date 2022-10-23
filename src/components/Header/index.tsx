/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import { Container } from './styles';
import { HeaderProps } from './interfaces';
import { useModal } from '../../hooks/useModal';

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { handleOpenNewTransactionModal } = useModal();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link key="dashboard" to="/">
            Dashboard
          </Link>
          <Link key="import" to="/import">
            Importar
          </Link>
          <button type="button" onClick={handleOpenNewTransactionModal}>
            Novo Lançamento
          </button>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
