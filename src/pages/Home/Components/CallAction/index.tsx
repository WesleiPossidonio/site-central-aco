import { ContainerCallAction, ContentCallAction, ContentText, Image } from "./styled"
import Img from '../../../../assets/ImgCallAction.webp'
import { Button, TextRegular, TitleText } from "../../../../components"
import AOS from 'aos'
import { useEffect } from "react"

export const CallAction = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerCallAction>
      <ContentCallAction data-aos="zoom-in" data-aos-duration="1000">
        <ContentText>
            <TitleText size="l" color="white">
              Não perca a chance de elevar seus projetos a um novo patamar!
            </TitleText>
            <TextRegular color="white">
              Entre em contato conosco hoje e descubra 
              como nosso aço de alta qualidade, aliado ao nosso 
              atendimento excepcional, pode transformar suas ideias 
              em realidade. A hora de agir é agora
            </TextRegular>
            <Button btnLarge bgColor="white">
              <a href="https://api.whatsapp.com/send?phone=552227622717&text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento" target="_blank">Faça o seu Pedido!</a></Button>
        </ContentText>
        <Image src={Img} />
      </ContentCallAction>
    </ContainerCallAction>
  )
}


