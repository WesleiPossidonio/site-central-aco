import { Button, TextRegular, TitleSection } from "../../../../../components"
import { 
  ContainerAboutService, 
  ContentText, 
  ImageService, 
  StyleImg 
} from "./styled"

import ImgService from '../../../../../assets/ImgBannerFour.webp'

export const AboutServices = () => {
  return (
    <ContainerAboutService>
        <StyleImg>
          <ImageService src={ImgService} />
        </StyleImg>

        <ContentText>
          <TitleSection
            PositionTitle="flex-start"
            SubTitleColor="text"
            TextSubTitle="Chapas em Geral"
            line={false}
          />

          <TextRegular>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
            dicta nostrum, eos dignissimos placeat deserunt magnam enim? Assumenda 
            autem laboriosam dicta numquam ex praesentium provident suscipit 
            quos dolores sed. Illum.
          </TextRegular>
          <TextRegular>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
            dicta nostrum, eos dignissimos placeat deserunt magnam enim? Assumenda 
            autem laboriosam dicta numquam ex praesentium provident suscipit 
            quos dolores sed. Illum.
          </TextRegular>

          <Button bgColor="bg" btnLarge={false}>Fazer Pedido!</Button>
        </ContentText>
      </ContainerAboutService>
  )
}

