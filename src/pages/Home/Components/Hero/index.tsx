//Images
import imgBannerOne from '../../../../assets/ImgBannerOne.jpg'
import imgBannerTwo from '../../../../assets/ImgBannerTwo.jpg'
import imgBannerFour from '../../../../assets/ImgBannerFour.jpg'

//Components
import { ContainerMain, ContentSwiper, ContentText, ImgBanner } from './styled';
import { Button, TextRegular, TitleText } from '../../../../components';

//Banner Swiper
import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const BannerMain = () => {
  return (
    <ContainerMain>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <ContentSwiper>
          <ImgBanner src={imgBannerOne} alt="" />
          
          <ContentText>
            <TitleText color='white' size='hero'>Sua construção <br /> merece o melhor suporte.</TitleText>
            <TextRegular color='white'>Conheça as opções de aço que trazem segurança e durabilidade para a sua obra.</TextRegular>
            <Button bgColor='bg' btnLarge={false}>Saiba Mais</Button>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBannerFour} alt="" />
          <ContentText className='contentTextCenter'>
            <TitleText color='white' size='hero'>Não comprometa a resistência da sua construção.</TitleText>
            <TextRegular color='white'>Veja como o aço certo pode fortalecer cada detalhe do seu projeto</TextRegular>
            <Button bgColor='bg' btnLarge={false}>Saiba Mais</Button>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBannerTwo} alt="" />
          <ContentText>
            <TitleText color='white' size='hero'>Não deixe sua obra sem <br /> a estrutura certa.</TitleText>
            <TextRegular color='white'>Descubra como o aço de qualidade pode fazer toda a diferença no seu projeto</TextRegular>
            <Button bgColor='bg' btnLarge={false}>Saiba Mais</Button>
          </ContentText>
        </ContentSwiper>
      </Swiper>
    </ContainerMain>
  )
}
