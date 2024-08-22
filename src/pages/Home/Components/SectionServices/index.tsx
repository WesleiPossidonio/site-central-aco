
// swiper Banner
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

// import icons 
import IconImage from '../../../../assets/IconTest.svg'
import ChapasIcon from '../../../../assets/ChapasIcon.svg'
import VigasIcon from '../../../../assets/VigasIcon.svg'
import TarugosIcon from '../../../../assets/TarugosIcon.svg'
import TelasTelconIcons from '../../../../assets/TelasIcon.svg'
import TubosIcon from '../../../../assets/TubosIcon.svg'
import CantoneiraIcon from '../../../../assets/CantoneiraIcon.svg'

// Components
import { TextRegular, TitleSection, TitleText } from '../../../../components'
import { CardSwiper, ContainerSectionServices, ContentTextCard, Header, Icon } from './styled'
import { useNavigate } from 'react-router-dom'


export const SectionServices = () => {

  const navigate = useNavigate()
  return (
    <ContainerSectionServices id='services'>
      <Header>
        <TitleSection
          line={true}
          PositionTitle='flex-start'
          TextSubTitle='SERVIÇOS'
          TextTitle='Nossos Serviços'
          SubTitleColor='white'
        />

        <TextRegular weight={500} color='white'>
          Mais do que fornecer aço, entregamos soluções sob medida que
          transformam suas necessidades em realidade. Confiabilidade e
          precisão em cada serviço.
        </TextRegular>
      </Header>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <CardSwiper>
          <Icon src={IconImage} />

          <ContentTextCard>
            <TitleText>Barras em Geral</TitleText>
            <TextRegular size='s'>Estrutura sólida começa com as nossas barras de alta qualidade.</TextRegular>
            <TextRegular size='m' color='bg' weight={500} onClick={() => navigate('/barras-em-geral')}>Ver Medidas</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={CantoneiraIcon} />

          <ContentTextCard>
            <TitleText>Cantoneira</TitleText>
            <TextRegular>Cantoneiras que garantem o ângulo perfeito e a resistência que sua obra precisa.</TextRegular>
            <TextRegular size='m' color='bg' weight={500} onClick={() => navigate('/cantoneira')}>Ver Medidas</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={ChapasIcon} />

          <ContentTextCard>
            <TitleText>Chapas em Geral</TitleText>
            <TextRegular>Versatilidade e força em cada chapa para suas soluções estruturais.</TextRegular>
            <TextRegular size='m' color='bg' weight={500} onClick={() => navigate('/chapas-em-geral')}>Ver Medidas</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={VigasIcon} />

          <ContentTextCard>
            <TitleText>Vigas em Geral</TitleText>
            <TextRegular>Vigas robustas que sustentam grandes ideias e projetos grandiosos.</TextRegular>
            <TextRegular size='m' color='bg' weight={500}>Ver Medidas</TextRegular>
          </ContentTextCard>

        </CardSwiper>

        <CardSwiper>
          <Icon src={TarugosIcon} />

          <ContentTextCard>
            <TitleText>Tarugos</TitleText>
            <TextRegular>Tarugos de precisão para resultados impecáveis e duradouros.</TextRegular>
            <TextRegular size='m' color='bg' weight={500}>Ver Medidas</TextRegular>
          </ContentTextCard>

        </CardSwiper>

        <CardSwiper>
          <Icon src={TelasTelconIcons} />

          <ContentTextCard>
            <TitleText>Telas Telcon</TitleText>
            <TextRegular>Proteção e segurança com as telas Telcon que você pode confiar.</TextRegular>
            <TextRegular size='m' color='bg' weight={500}>Ver Medidas</TextRegular>
          </ContentTextCard>
        </CardSwiper>

        <CardSwiper>
          <Icon src={TubosIcon} />

          <ContentTextCard>
            <TitleText>Tubos em Geral</TitleText>
            <TextRegular>Tubos versáteis e resistentes para conduzir seus projetos ao sucesso</TextRegular>
            <TextRegular size='m' color='bg' weight={500}>Ver Medidas</TextRegular>
          </ContentTextCard>
        </CardSwiper>

      </Swiper>
    </ContainerSectionServices>
  )
}


