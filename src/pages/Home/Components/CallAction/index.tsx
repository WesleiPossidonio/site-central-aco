import { ContainerCallAction, ContentCallAction, ContentText, Image } from "./styled"
import Img from '../../../../assets/ImgCallAction.png'
import { Button, TextRegular, TitleText } from "../../../../components"

export const CallAction = () => {
  return (
    <ContainerCallAction>
      <ContentCallAction>
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
            <Button btnLarge bgColor="white">Saiba Mais!</Button>
        </ContentText>
        <Image src={Img} />
      </ContentCallAction>
    </ContainerCallAction>
  )
}


