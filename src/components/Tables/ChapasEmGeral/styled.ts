import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const TableHeader = styled.th`
  background-color: ${({ theme }) => theme.colors["base-bg"]};
  border: 1px solid #000;
  padding: 8px;
  font-weight: bold;
  color: ${({theme}) => theme.colors['base-white']};
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
