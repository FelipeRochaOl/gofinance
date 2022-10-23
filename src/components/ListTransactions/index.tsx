import React from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { TableContainer } from './styled';

export const ListTransactions: React.FC = () => {
  const { transactions } = useTransactions();
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions &&
            transactions.map(
              ({
                id,
                title,
                type,
                formattedValue,
                category,
                formattedDate,
              }) => (
                <tr key={id}>
                  <td className="title">{title}</td>
                  <td className={type}>{formattedValue}</td>
                  <td>{category.title}</td>
                  <td>{formattedDate}</td>
                </tr>
              ),
            )}
        </tbody>
      </table>
    </TableContainer>
  );
};
