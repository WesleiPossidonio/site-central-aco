import { Table, TableCell, TableContainer, TableHeader, TableRow } from "./styled";

export const TableChapasInox = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader colSpan={3}>CHAPAS EM INOX</TableHeader>
          </tr>
          <tr>
            <TableHeader>ESPESSURA</TableHeader>
            <TableHeader>mm</TableHeader>
            <TableHeader>PESO kg/m²</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>0.40</TableCell>
            <TableCell>3.14</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>0.50</TableCell>
            <TableCell>3.78</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>0.60</TableCell>
            <TableCell>5.03</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>0.80</TableCell>
            <TableCell>6.29</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.00</TableCell>
            <TableCell>8.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.20</TableCell>
            <TableCell>9.50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.50</TableCell>
            <TableCell>11.90</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.00</TableCell>
            <TableCell>15.72</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.50</TableCell>
            <TableCell>19.03</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3.00</TableCell>
            <TableCell>24.30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4.00</TableCell>
            <TableCell>31.43</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5.00</TableCell>
            <TableCell>38.30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>9.53</TableCell>
            <TableCell>74.10</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};
