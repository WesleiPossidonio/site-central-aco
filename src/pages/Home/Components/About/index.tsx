// Images
import { useEffect } from 'react'
import ImgABoutOne from '../../../../assets/AboutOne.webp'
import ImgABoutTwo from '../../../../assets/AboutTwo.webp'

// Components
import { Button, TextRegular, TitleSection, TitleText } from "../../../../components"
import {
  ContainerAbout,
  ContainerImage,
  ContainerTextAbout,
  ImgAbout,
  ImgAboutBotton
} from "./styled"

import AOS from 'aos'

export const About = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerAbout id='about'>
      <ContainerImage data-aos="zoom-in" data-aos-duration="1000">
        <ImgAbout src={ImgABoutOne} />

        <div>
          <ImgAboutBotton src={ImgABoutTwo} />
          <span>
            <TitleText size="xll" weight={700} color="bg">+20</TitleText>
            <TitleText size="m" color="text">Anos no Mercado</TitleText>
          </span>
        </div>

      </ContainerImage>

      <ContainerTextAbout data-aos="fade-left" data-aos-duration="1000">
        <TitleSection
          PositionTitle='flex-start'
          SubTitleColor='gray-200'
          TextSubTitle='Sobre Nós'
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

        <Button bgColor='bg' btnLarge={false}>Fazer Pedido!</Button>
      </ContainerTextAbout>
    </ContainerAbout>
  )
}

