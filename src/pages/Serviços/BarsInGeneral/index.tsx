
import { ContainerBarsInGeneral } from "./styled"
import { AboutServices, BannerServices, MeasurementsSection } from "./components"
import { CallAction } from "../../Home/Components"
import { Contact } from "../../../components"

export const BarsInGeneral = () => {

  return (
    <ContainerBarsInGeneral>
      <BannerServices />
      <AboutServices />
      <CallAction />
      <MeasurementsSection />
      <Contact />
    </ContainerBarsInGeneral>
  )
}

