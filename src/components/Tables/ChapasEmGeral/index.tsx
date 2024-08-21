import {StyledTable, TableCell, TableContainer, TableHeader, TableRow} from './styled'


export const TableChapasEmGeral = () => {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader colSpan={5}>CHAPAS EM GERAL</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader colSpan={2}>ESPESSURA</TableHeader>
            <TableHeader>PESO kg/m²</TableHeader>
            <TableHeader colSpan={2}>ESPESSURA</TableHeader>
            <TableHeader>PESO kg/m²</TableHeader>
            <TableHeader>TAMANHO PADRÃO</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader>BITOLA</TableHeader>
            <TableHeader>mm</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader>BITOLA</TableHeader>
            <TableHeader>mm</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>28</TableCell>
            <TableCell>0.48</TableCell>
            <TableCell>3.80</TableCell>
            <TableCell>3/8"</TableCell>
            <TableCell>9.53</TableCell>
            <TableCell>74.70</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>26</TableCell>
            <TableCell>0.55</TableCell>
            <TableCell>4.43</TableCell>
            <TableCell>7/16"</TableCell>
            <TableCell>11.11</TableCell>
            <TableCell>87.14</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>24</TableCell>
            <TableCell>0.65</TableCell>
            <TableCell>5.65</TableCell>
            <TableCell>1/2"</TableCell>
            <TableCell>12.70</TableCell>
            <TableCell>99.59</TableCell>
            <TableCell rowSpan={3}>
              2 X 1m<br />
              3 X 1,20m<br />
              6 X 2,45m
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>22</TableCell>
            <TableCell>0.85</TableCell>
            <TableCell>6.87</TableCell>
            <TableCell>5/8"</TableCell>
            <TableCell>15.88</TableCell>
            <TableCell>124.49</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>20</TableCell>
            <TableCell>1.00</TableCell>
            <TableCell>8.10</TableCell>
            <TableCell>3/4"</TableCell>
            <TableCell>19.05</TableCell>
            <TableCell>149.39</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>18</TableCell>
            <TableCell>1.30</TableCell>
            <TableCell>10.53</TableCell>
            <TableCell>7/8"</TableCell>
            <TableCell>22.22</TableCell>
            <TableCell>174.99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16</TableCell>
            <TableCell>1.60</TableCell>
            <TableCell>12.97</TableCell>
            <TableCell>1.1/8"</TableCell>
            <TableCell>28.58</TableCell>
            <TableCell>224.08</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14</TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>16.20</TableCell>
            <TableCell>1.1/4"</TableCell>
            <TableCell>31.75</TableCell>
            <TableCell>248.48</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/8”</TableCell>
            <TableCell>3.00</TableCell>
            <TableCell>22.40</TableCell>
            <TableCell>1.1/2"</TableCell>
            <TableCell>38.10</TableCell>
            <TableCell>298.78</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3/16”</TableCell>
            <TableCell>4.76</TableCell>
            <TableCell>37.35</TableCell>
            <TableCell>1.3/4"</TableCell>
            <TableCell>44.45</TableCell>
            <TableCell>348.58</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1/4”</TableCell>
            <TableCell>6.35</TableCell>
            <TableCell>49.60</TableCell>
            <TableCell>2"</TableCell>
            <TableCell>50.80</TableCell>
            <TableCell>398.37</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5/16”</TableCell>
            <TableCell>7.94</TableCell>
            <TableCell>62.25</TableCell>
            <TableCell>2.1/2"</TableCell>
            <TableCell>63.50</TableCell>
            <TableCell>498.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={7} style={{ color: 'red', fontWeight: 'bold' }}>
              FORNECEMOS TAMBÉM CHAPAS CORTADAS EM TAMANHOS ESPECIAIS!
            </TableCell>
          </TableRow>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
