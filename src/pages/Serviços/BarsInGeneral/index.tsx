
import { ContainerBarsInGeneral } from "./styled"
import { AboutServices, BannerServices, CallAction, MeasurementsSection } from "./components"
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

