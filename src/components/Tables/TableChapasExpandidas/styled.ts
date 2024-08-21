import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 20px 0;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

export const TableHeader = styled.th`
  background-color: ${({theme}) => theme.colors['base-bg']};;
  color: white;
  padding: 12px 8px;
  text-align: left;
  font-weight: bold;
  border: 1px solid #ddd;
  ${({ colSpan }) => colSpan && `colspan: ${colSpan};`}
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px 8px;
  text-align: left;
  border: 1px solid #ddd;
  color: #333;
  font-size: 14px;
  min-width: 80px;

  &:first-child {
    font-weight: bold;
  }
`;
