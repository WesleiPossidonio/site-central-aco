import { Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react"
import Logo from '../../assets/logo.png'
import LogoCriard from '../../assets/criard_logo.png'
import { TextRegular, TitleText } from "../typografy"
import {
  ContainerFooter,
  ContentContact,
  ContentLinkLogo,
  ContentLinkSite,
  ContentLogo,
  ImgLogo,
  LinkSite,
  TitleLinks
} from "./styled"



export const Footer = () => {
  return (
    <ContainerFooter>
      <ContentLogo>
        <ImgLogo src={Logo} />

        <ContentLinkLogo>
          <TextRegular color="text" size="s">
            Central de Aços © 2024 - Todos os direitos reservados.
          </TextRegular>
          
          <TextRegular color="text" size="sm" weight={600}>
            Desenvolvido por
            <a href="https://www.criard.com.br/" target="_blank" ><img id="company-img" src={LogoCriard} alt="" /></a>
          </TextRegular>
        </ContentLinkLogo>
      </ContentLogo>

      <ContentLinkSite>
        <TitleText color="text">
          Mapa do Site
        </TitleText>
        <LinkSite>
          <TextRegular color="text" weight={600}>
            <a href="#home">Home</a>
          </TextRegular>
          <TextRegular color="text" weight={600}>
            <a href="#about"> Sobre Nós</a>
          </TextRegular>
          <TextRegular color="text" weight={600}>
            <a href="#services">Serviços</a>
          </TextRegular>
          <TextRegular color="text" weight={600}>
            <a href="#contact">Contatos</a>
          </TextRegular>
          <TextRegular color="text" weight={600}>
            <a href="#">Central Express</a>
          </TextRegular>
        </LinkSite>
      </ContentLinkSite>

      <ContentContact>
        <TitleText color="text">
          Contatos
        </TitleText>

        <TitleLinks>
          <WhatsappLogo size={31} color="#000" />
          <div>
            <TextRegular weight={600}>Whatsapp</TextRegular>
            <TextRegular size="sm" color="text">
              (22) 2762-2717
            </TextRegular>
          </div>
        </TitleLinks>

        <TitleLinks>
          <Envelope size={31} color="#000" />
          <div>
            <TextRegular weight={600}>Email</TextRegular>
            <TextRegular size="sm" color="text">
              vendas@centraldeacos.com.br
            </TextRegular>
          </div>
        </TitleLinks>

        <TitleLinks>
          <MapPin size={31} color="#000" />
          <div>
            <TextRegular weight={600}>Matrix Macaé</TextRegular>
            <TextRegular size="sm" color="text"> R. Evaldo Costa, 1103 - Sol Y Mar, Macaé - RJ</TextRegular>
          </div>
        </TitleLinks>

      </ContentContact>
    </ContainerFooter>
  )
}

