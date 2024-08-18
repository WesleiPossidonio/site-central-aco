import { Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react"

import { ContainerFooter, ContentLinks, ImgLogo, LinkSite, TitleLinks } from "./styled"

import Logo from '../../assets/logo.png'
import { TextRegular, TitleText } from "../typografy"

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentLinks>
        <ImgLogo src={Logo} />
        <TextRegular color="text">
          Central de Aços © 2024 - Todos os direitos reservados. 
        </TextRegular>
      </ContentLinks>

      <ContentLinks>
        <TitleText color="text">
          Mapa do Site
        </TitleText>
        <LinkSite>
          <TextRegular color="text">Home</TextRegular>
          <TextRegular color="text">Sobre Nós</TextRegular>
          <TextRegular color="text">Serviços</TextRegular>
          <TextRegular color="text">Contatos</TextRegular>
        </LinkSite>
      </ContentLinks>

      <ContentLinks>
        <TitleText color="text">
          Contatos
        </TitleText>

        <TitleLinks>
           <WhatsappLogo size={31} color="#fff" />
           <div>
              <TextRegular weight={600}>Whatsapp</TextRegular>
              <TextRegular size="sm" color="text">
                (22) 2762-2717
              </TextRegular>
           </div>
        </TitleLinks>

        <TitleLinks>
           <Envelope size={31} color="#fff" />
           <div>
              <TextRegular weight={600}>Email</TextRegular>
              <TextRegular size="sm" color="text">
                vendas@centraldeacos.com.br
              </TextRegular>
           </div>
        </TitleLinks>
        
        <TitleLinks>
           <MapPin size={31} color="#fff" />
           <div>
              <TextRegular weight={600}>Matrix Macaé</TextRegular>
              <TextRegular size="sm" color="text">Rua Dr Julio Olivier, 320</TextRegular>
           </div>
        </TitleLinks>

      </ContentLinks>
    </ContainerFooter>
  )
}

