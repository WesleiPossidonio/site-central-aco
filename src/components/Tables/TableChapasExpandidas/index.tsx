import { Table, TableCell, TableContainer, TableHeader, TableRow } from "./styled";

export const TableChapasExpandidas = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader colSpan={5}>CHAPAS EXPANDIDAS</TableHeader>
          </tr>
          <tr>
            <TableHeader>BITOLA</TableHeader>
            <TableHeader>mm</TableHeader>
            <TableHeader>PESO kg/m²</TableHeader>
            <TableHeader>MALHA</TableHeader>
            <TableHeader>TAMANHO PADRÃO</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>1/8"</TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>5.70</TableCell>
            <TableCell>50 X 25</TableCell>
            <TableCell>2 X 1m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/8"</TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>3.90</TableCell>
            <TableCell>75 X 38</TableCell>
            <TableCell>2 X 1m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/8"</TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>100 X 45</TableCell>
            <TableCell>2 X 1m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3/16"</TableCell>
            <TableCell>4.75</TableCell>
            <TableCell>6.00</TableCell>
            <TableCell>100 X 45</TableCell>
            <TableCell>2 X 1m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/4"</TableCell>
            <TableCell>6.30</TableCell>
            <TableCell>9.00</TableCell>
            <TableCell>100 X 45</TableCell>
            <TableCell>2 X 1m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5/16"</TableCell>
            <TableCell>8.00</TableCell>
            <TableCell>20.00</TableCell>
            <TableCell>100 X 45</TableCell>
            <TableCell>2 X 1m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3/8"</TableCell>
            <TableCell>9.53</TableCell>
            <TableCell>26.00</TableCell>
            <TableCell>100 X 45</TableCell>
            <TableCell>2 X 1m</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};
