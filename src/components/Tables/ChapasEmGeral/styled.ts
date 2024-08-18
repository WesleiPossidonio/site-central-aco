import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHeader = styled.th`
  background-color: #BDD7EE;
  border: 1px solid #000;
  padding: 8px;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #000;
  padding: 8px;
`;