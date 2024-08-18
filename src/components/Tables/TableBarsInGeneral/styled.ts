import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  margin: 1.25rem;
  border-radius: 0.75rem;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 0.9rem;
`;

export const TableHeader = styled.th`
  background-color: ${({theme}) => theme.colors["base-bg"]}; /* Cor azul para o cabeçalho */
  color: ${({theme}) => theme.colors["base-white"]};
  padding: 0.625rem;
  border: 1px solid #000;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2; /* Cor de fundo alternada para as linhas */
  }
`;

interface TableCellProps {
  isHighlight?: boolean
  isStandardSize?: boolean
}

export const TableCell = styled.td<TableCellProps>`
  padding: 0.625rem;
  border: 1px solid #ccc;
  color: ${({ isHighlight }) => (isHighlight ? 'red' : 'black')}; /* Cor vermelha para células destacadas */
  background-color: ${({ isStandardSize, }) => (isStandardSize ? '#f2f2f2' : 'inherit')}; /* Cor azul para colunas padrão */
`;
