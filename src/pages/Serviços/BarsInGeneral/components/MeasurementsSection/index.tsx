import { useState } from "react"
import { TextRegular, TitleSection } from "../../../../../components"
import { 
  ContainerMeasurements, 
  HeaderSection, 
  MeasurementContent, 
  Selected 
} from "./styled"

import { 
  TableBarrasQuadradas, 
  TableBarrasRedondas, 
  TableBarrasT, 
  TableBarsInGeneral 
} from "../../../../../components/Tables"

export const MeasurementsSection = () => {
  const [optionSelected, setOptionSelected] = useState<string>('')

  const handleSelectedTable = (data: string) => {
    setOptionSelected(data)
  }

  const tableSelected = () => {
    switch (optionSelected) {
      case 'BARRA CHATADA':
        return <TableBarsInGeneral />
      case 'BARRA T':
        return <TableBarrasT />
      case 'BARRAS QUADRADAS':
        return <TableBarrasQuadradas />
      case 'BARRAS REDONDAS':
        return <TableBarrasRedondas />
      default:
        return <TableBarsInGeneral />
    }
  }

  return (
    <ContainerMeasurements>

      <HeaderSection>
        <TitleSection
          PositionTitle="flex-start"
          SubTitleColor="text"
          TextSubTitle="Medidas"
          line={false}
        />

        <TextRegular id="text">Selecione o equipamento desejado para ver as medidas</TextRegular>

        <Selected 
          name="" 
          id="" 
          value={optionSelected}
          onChange={(e) => handleSelectedTable(e.target.value)}
          >
            <option value="BARRA CHATADA">BARRA CHATADA</option>
            <option value="BARRA T">BARRA T</option>
            <option value="BARRAS QUADRADAS">BARRAS QUADRADAS</option>
            <option value="BARRAS REDONDAS">BARRAS REDONDAS</option>
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


