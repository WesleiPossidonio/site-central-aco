
import { TextRegular, TitleSection } from "../../../../../components"
import { ContainerMeasurements, HeaderSection, MeasurementContent, Selected } from "./styled"
import { TableBarsInGeneral } from "../../../../../components/Tables"
import { useState } from "react"


export const MeasurementsSection = () => {
  const [optionSelected, setOptionSelected] = useState<string>('')

  const handleSelectedTable = (data: string) => {
    setOptionSelected(data)
  }

  console.log(optionSelected)
  return (
    <ContainerMeasurements>

      <HeaderSection>
        <TitleSection
          PositionTitle="flex-start"
          SubTitleColor="text"
          TextSubTitle="Selecione"
          TextTitle="Medidas"
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
            <option value="BARRA CHATADA">BARRA CHATADA</option>
            <option value="BARRA CHATADA">BARRA CHATADA</option>
            <option value="BARRA CHATADA">BARRA CHATADA</option>
          </Selected>
      </HeaderSection>

      <MeasurementContent>
        <TableBarsInGeneral />
      </MeasurementContent>
        
    </ContainerMeasurements>
  )
}


