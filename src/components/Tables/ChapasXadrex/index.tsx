import { StyledTable, TableCell, TableContainer, TableHeader, TableRow } from "./styled";

export const TableChapasXadrex = () => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader colSpan={2}>CHAPAS XADREZ EM ALUMÍNIO</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader>ESPESSURA</TableHeader>
            <TableHeader>PESO kg/m²</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader>mm</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>1,20</TableCell>
            <TableCell>4.75</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1,50</TableCell>
            <TableCell>5.60</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2,20</TableCell>
            <TableCell>8.80</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3,00</TableCell>
            <TableCell>10.80</TableCell>
          </TableRow>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
