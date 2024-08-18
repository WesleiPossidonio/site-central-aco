
import { Envelope, FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import { ContainerHeaderLinks, ContainerLinks, ContentLinkContact, TextLink } from "./styled"


export const HeaderLinks = () => {
  return (
    <ContainerHeaderLinks>
      <ContentLinkContact>
        <Envelope size={31} />
        <TextLink href="mailto:example@gmail.com">example@gmail.com</TextLink>
      </ContentLinkContact>

      <ContainerLinks>
        <TextLink href="#" target="_blank">
          <InstagramLogo size={25} />
        </TextLink>
        
        <TextLink href="#" target="_blank">  
          <FacebookLogo size={25}  />
        </TextLink>
      </ContainerLinks>
     
    </ContainerHeaderLinks>
  )
}