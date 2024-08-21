import { Contact } from "../../components"
import { 
  About, 
  Advantages, 
  BannerMain, 
  CallAction,
  Faq, 
  FeedInstagram, 
  SectionServices 
} from "./Components"
import { ContainerPage} from "./styled"

export const Home = () => {
  return (
    <ContainerPage>
      <BannerMain />
      <About />
      <SectionServices />
      <Advantages />
      <CallAction />
      <FeedInstagram />
      <Faq />
      <Contact />
    </ContainerPage>
  )
}


