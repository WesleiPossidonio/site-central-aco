import { TextRegular, TitleText } from '../../../../../components'
import { ContainerBanner } from './styled'

import ImageBanner from '../../../../../assets/ImgBannerTwo.webp'

export const BannerServices = () => {
  return (
    <ContainerBanner ImageBg={ImageBanner}>
    <div id='contentTextBanner'>
      <TitleText color="white" size='xl'>Barras em Geral</TitleText>
      <TextRegular color="white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </TextRegular>
    </div>
    <TitleText color="white" size="s">Home | Barras em Geral</TitleText>
  </ContainerBanner>
  )
}

