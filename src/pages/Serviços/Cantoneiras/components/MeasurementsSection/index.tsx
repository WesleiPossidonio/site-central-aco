
import { TextRegular, TitleSection } from "../../../../../components"
import { TableCantoneiras } from "../../../../../components/Tables/TableCantoneiras"
import {
  ContainerMeasurements,
  HeaderSection,
  MeasurementContent,
} from "./styled"

export const MeasurementsSection = () => {

  return (
    <ContainerMeasurements>
      <HeaderSection>
        <TitleSection
          PositionTitle="flex-start"
          SubTitleColor="text"
          TextSubTitle="Medidas"
          line={false}
        />
        <TextRegular id="text">Veja as Nossas medidas</TextRegular>
      </HeaderSection>

      <MeasurementContent>
        <TableCantoneiras />
      </MeasurementContent>

    </ContainerMeasurements>
  )
}


