//images
import ImageBoxTwo from '../../../../assets/ImgAdvantagesTwo.webp'
import ImageBoxThree from '../../../../assets/ImgAdvantagesThree.webp'

//Components and Styles
import { TextRegular, TitleSection, TitleText } from "../../../../components"
import {
  AdvantageBox,
  BoxImage,
  BoxNumber,
  ContainerAdvantages,
  ContentImg,
  ContentText,
  ImgOne,
  ImgTwo,
  ListAdvantages
} from "./styled"
import { Checks, HandCoins, Nut, Users } from '@phosphor-icons/react'
import CountUp from 'react-countup'
import AOS from 'aos'
import { useEffect } from 'react'

export const Advantages = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerAdvantages>
      <ContentText data-aos="fade-right" data-aos-duration="1000">
        <TitleSection
          PositionTitle='flex-start'
          TextSubTitle='VANTAGENS'
          TextTitle='Nossas Vantagens'
          SubTitleColor='text'
          line={false}
        />
        <TextRegular weight={500}>
          Descubra as vantagens que fazem a diferença: <strong> Qualidade Superior , 
          Atendimento Personalizado e Soluções Ágeis </strong> para tornar seu 
          projeto um sucesso garantido.
        </TextRegular>

        <ListAdvantages>
          <AdvantageBox>
            <HandCoins size={40} color='#023345' />
            <div>
              <TitleText size='s'>Preços Competitivos:</TitleText>
              <TextRegular size='sm' weight={500}>
                Trabalhamos para oferecer os melhores preços do mercado.
              </TextRegular>
            </div>

          </AdvantageBox>
          <AdvantageBox>
            <Nut size={42} color='#023345' />
            <div>
              <TitleText size='s'>Variedade de Produtos:</TitleText>
              <TextRegular size='sm' weight={500}>
                Oferecemos uma ampla gama de produtos de aço,
              </TextRegular>
            </div>

          </AdvantageBox>
          <AdvantageBox>
            <Checks size={42} color='#023345' />
            <div>
              <TitleText size='s'>Alta Qualidade e Durabilidade:</TitleText>
              <TextRegular size='sm' weight={500}>
                Nosso aço é fabricado com os mais altos padrões de qualidade
              </TextRegular>
            </div>
          </AdvantageBox>
          <AdvantageBox>
            <Users size={42} color='#023345' />
            <div>
              <TitleText size='s'>Atendimento Personalizado:</TitleText>
              <TextRegular size='sm' weight={500}>
                Nossa equipe especializada está pronta para ajudar você a escolher os produtos certos
              </TextRegular>
            </div>
          </AdvantageBox>
        </ListAdvantages>
      </ContentText>

      <ContentImg data-aos="zoom-in" data-aos-duration="1000">
        <BoxImage widthImage='imgOne'>
          <ImgOne src={ImageBoxTwo} className="imgTwo" />
        </BoxImage>

        <BoxImage widthImage='imgTwo'>
          <ImgTwo src={ImageBoxThree} className="imgThree" />
        </BoxImage>

        <BoxNumber>
          <TitleText size="xl" color="bg">+<CountUp end={1000} duration={10} /></TitleText>
          <TitleText>Clientes <br /> Satisfeitos</TitleText>
        </BoxNumber>
      </ContentImg>
    </ContainerAdvantages>
  )
}


