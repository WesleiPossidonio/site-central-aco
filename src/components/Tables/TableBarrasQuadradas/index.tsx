
import { Table, TableCell, TableContainer, TableHeader, TableRow } from './styled';

export const TableBarrasQuadradas = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader colSpan={5}>BARRAS QUADRADAS</TableHeader>
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
            <TableCell>5/16"</TableCell>
            <TableCell>7.94</TableCell>
            <TableCell>0.49</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3/8"</TableCell>
            <TableCell>9.53</TableCell>
            <TableCell>0.71</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/2"</TableCell>
            <TableCell>12.70</TableCell>
            <TableCell>1.26</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5/8"</TableCell>
            <TableCell>15.87</TableCell>
            <TableCell>1.97</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3/4"</TableCell>
            <TableCell>19.05</TableCell>
            <TableCell>2.84</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7/8"</TableCell>
            <TableCell>22.22</TableCell>
            <TableCell>3.87</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1"</TableCell>
            <TableCell>25.40</TableCell>
            <TableCell>5.06</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1/4"</TableCell>
            <TableCell>31.75</TableCell>
            <TableCell>7.90</TableCell>
            <TableCell>6m</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};
