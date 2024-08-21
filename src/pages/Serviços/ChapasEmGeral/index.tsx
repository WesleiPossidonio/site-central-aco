

import { AboutServices, BannerServices, MeasurementsSection } from "./components"
import { CallAction } from "../../Home/Components"
import { Contact } from "../../../components"
import { ContainerBarsInGeneral } from "./styled"


export const ChapasEmGeral = () => {

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

