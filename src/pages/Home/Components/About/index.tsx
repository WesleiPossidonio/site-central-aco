// Images
import ImgABoutOne from '../../../../assets/AboutOne.jpg'
import ImgABoutTwo from '../../../../assets/AboutTwo.jpg'

// Components
import { Button, TextRegular, TitleSection, TitleText } from "../../../../components"
import {
  ContainerAbout,
  ContainerImage,
  ContainerTextAbout,
  ImgAbout,
  ImgAboutBotton
} from "./styled"

export const About = () => {
  return (
    <ContainerAbout>
      <ContainerImage>
        <span>
          <TitleText size="xll" weight={700} color="bg">+20</TitleText>
          <TitleText size="m" color="text">Anos no Mercado</TitleText>
        </span>
        <ImgAbout src={ImgABoutOne} />
        <ImgAboutBotton src={ImgABoutTwo} />
      </ContainerImage>

      <ContainerTextAbout>
        <TitleSection
          PositionTitle='flex-start'
          SubTitleColor='text'
          TextSubTitle='SOBRE'
          TextTitle='Sobre Nós'
          line={false}
        />
        {/* <TitleText size="s">Sobre Nós</TitleText> */}
        <TitleText size='xl'>
          A força e a experiência que sustentam seus projetos
        </TitleText>

        <TextRegular>
          Nossa história é construída com aço e compromisso. 
          <strong> Com anos de experiência, somos especialistas em fornecer 
          as soluções certas </strong>  para tornar seus projetos mais fortes e duráveis. 
          <strong> Confiança, qualidade e dedicação estão na base de tudo o que fazemos. </strong>
        </TextRegular>

        <TextRegular>
           Aqui, cada detalhe importa. <strong> Do atendimento personalizado à entrega 
           pontual, </strong> estamos sempre ao seu lado, garantindo que <strong> suas expectativas 
           sejam superadas em cada etapa do processo. </strong>
        </TextRegular>

        <Button bgColor='bg' btnLarge={false}>Saíba Mais!</Button>
      </ContainerTextAbout>
    </ContainerAbout>
  )
}

