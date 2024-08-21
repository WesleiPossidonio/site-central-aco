import { ContainerWhatsappButton, ImageWhatsapp } from "./styled"

import ImgWhatsapp from '../../assets/whatsapp.png'

export const WhatsappButton = () => {
  return (
    <ContainerWhatsappButton href="https://api.whatsapp.com/send?phone=552227622717&text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento" target="_blank">
       <ImageWhatsapp src={ImgWhatsapp} title="Entre em Contato Conosco!" alt=""/>
    </ContainerWhatsappButton>
  )
}


