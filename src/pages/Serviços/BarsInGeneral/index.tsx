
import { ContainerBarsInGeneral, MeasurementContent, MeasurementsSection, TableSelected } from "./styled"
import { AboutServices, BannerServices } from "./components"
import { TableBarsInGeneral } from "../../../components/Tables"
import { Contact, TextRegular, TitleSection } from "../../../components"
import { CaretRight } from "@phosphor-icons/react"
import { useState } from "react"

export const BarsInGeneral = () => {

  const [opctionSelected, setOpctionSelected] = useState<string>()
  console.log(opctionSelected)
  return (
    <ContainerBarsInGeneral>
      <BannerServices />
      <AboutServices />
      <MeasurementsSection>
        <MeasurementContent>

        <TitleSection 
          PositionTitle="flex-start" 
          SubTitleColor="text" 
          TextSubTitle="Selecione" 
          TextTitle="Medidas" 
          line={false} 
        />

        <TextRegular>Selecione o equipamento desejado para ver as medidas</TextRegular>

          <TableSelected onClick={() => setOpctionSelected('BARRA CHATADA')}>
             <TextRegular color="text" size="s" weight={600}>BARRA CHATADA</TextRegular>
             <CaretRight size={20} />
          </TableSelected>
          <TableSelected>
             <TextRegular color="text" size="s" weight={600}>BARRA CHATADA</TextRegular>
             <CaretRight size={20} />
          </TableSelected>
          <TableSelected>
             <TextRegular color="text" size="s" weight={600}>BARRA CHATADA</TextRegular>
             <CaretRight size={20} />
          </TableSelected>
          <TableSelected>
             <TextRegular color="text" size="s" weight={600}>BARRA CHATADA</TextRegular>
             <CaretRight size={20} />
          </TableSelected>
        </MeasurementContent>
        <TableBarsInGeneral />
      </MeasurementsSection>
      
      <Contact />
    </ContainerBarsInGeneral>
  )
}

