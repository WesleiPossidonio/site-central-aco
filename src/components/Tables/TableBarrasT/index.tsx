
import { Table, TableCell, TableContainer, TableHeader, TableRow } from './styled';

export const TableBarrasT = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader colSpan={5}>BARRAS T</TableHeader>
          </tr>
          <tr>
            <TableHeader>LARGURA</TableHeader>
            <TableHeader>POLEGADA</TableHeader>
            <TableHeader>mm</TableHeader>
            <TableHeader>PESO kg/m</TableHeader>
            <TableHeader>TAMANHO PADRÃO</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>5/8"</TableCell>
            <TableCell>15.87</TableCell>
            <TableCell>0.72</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3/4"</TableCell>
            <TableCell>19.05</TableCell>
            <TableCell>0.88</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7/8"</TableCell>
            <TableCell>22.22</TableCell>
            <TableCell>1.04</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1"</TableCell>
            <TableCell>25.40</TableCell>
            <TableCell>1.19</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1/4"</TableCell>
            <TableCell>31.75</TableCell>
            <TableCell>1.62</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1/2"</TableCell>
            <TableCell>38.10</TableCell>
            <TableCell>1.83</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};