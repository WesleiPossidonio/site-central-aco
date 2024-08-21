

import { AboutServices, BannerServices, MeasurementsSection } from "./components"
import { CallAction } from "../../Home/Components"
import { Contact } from "../../../components"
import { ContainerBarsInGeneral } from "./styled"


export const Cantobeiras = () => {
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

