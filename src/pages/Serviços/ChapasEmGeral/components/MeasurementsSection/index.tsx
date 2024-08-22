import { useState } from "react"
import { TextRegular, TitleSection } from "../../../../../components"
import { 
  ContainerMeasurements, 
  HeaderSection, 
  MeasurementContent, 
  Selected 
} from "./styled"

import { 
  TableChapasEmGeral, 
  TableChapasExpandidas, 
  TableChapasInox, 
  TableChapasXadrex
} from "../../../../../components/Tables"

export const MeasurementsSection = () => {
  const [optionSelected, setOptionSelected] = useState<string>('')

  const handleSelectedTable = (data: string) => {
    setOptionSelected(data)
  }

  const tableSelected = () => {
    switch (optionSelected) {
      case 'CHAPAS EXPANDIDAS':
        return <TableChapasExpandidas />
      case 'CHAPAS XADREZ EM ALUMÍNIO':
        return <TableChapasXadrex/>
      case 'CHAPAS EM INOX':
        return <TableChapasInox />
      case 'CHAPAS EM GERAL':
        return <TableChapasEmGeral />
      default:
        return <TableChapasEmGeral />
    }
  }

  return (
    <ContainerMeasurements>

      <HeaderSection>
        <TitleSection
          PositionTitle="flex-start"
          SubTitleColor="text"
          TextSubTitle="Medidas"
          // TextTitle="Medidas"
          line={false}
        />

        <TextRegular id="text">Selecione o equipamento desejado para ver as medidas</TextRegular>

        <Selected 
          name="" 
          id="" 
          value={optionSelected}
          onChange={(e) => handleSelectedTable(e.target.value)}
          >
            <option value="CHAPAS EXPANDIDAS">CHAPAS EXPANDIDAS</option>
            <option value="CHAPAS XADREZ EM ALUMÍNIO">CHAPAS XADREZ EM ALUMÍNIO</option>
            <option value="CHAPAS EM GERAL">CHAPAS EM GERAL</option>
            <option value="CHAPAS EM INOX">CHAPAS EM INOX</option>
          </Selected>
      </HeaderSection>

      <MeasurementContent>
        {
          tableSelected()
        }
      </MeasurementContent>
        
    </ContainerMeasurements>
  )
}


