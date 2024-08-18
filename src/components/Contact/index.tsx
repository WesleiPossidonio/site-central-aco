
import { useEffect } from "react"

import { 
  ContainerContact, 
  ContainerEmailAndWhatsapp, 
  ContentContact,
  ContentEmailAndWhatsapp,
  ContentForm, 
  ContentInfo, 
  ContentTitle,  
  TextArea 
} from "./styled"


import { MapPinArea, Phone, Envelope } from "@phosphor-icons/react"

import AOS from 'aos'
import 'aos/dist/aos.css';
import { Button, TextRegular, TitleText, Input } from ".."

export const Contact = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ContainerContact id="contato">
      <ContentContact data-aos="zoom-in" data-aos-duration="1000">
        <ContentTitle>
          <TitleText size="s" color="white">
            CONTATO
          </TitleText>
  
          <TitleText size="l" color="white">
            Entre em  contato conosco.
          </TitleText>
       </ContentTitle>

        <ContentInfo>
         
          <ContainerEmailAndWhatsapp>
            <ContentEmailAndWhatsapp>
              <TitleText size="s" color="white"> <MapPinArea size={35} color="#fff" /> Endereços</TitleText>
              <div>
                <TextRegular color="white"> <strong>Macaé:</strong>{' '}
                 <a href=""> Rua Dr Julio Olivier, 320, Centro, Macaé/RJ </a>
                </TextRegular>
  
                <TextRegular color="white"><strong>Cabo Frio:</strong>{' '}
                 <a href=""> Rua Raul Veiga, 60, Centro, Cabo Frio/RJ </a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>
  
            <ContentEmailAndWhatsapp>
              <TitleText size="s" color="white"><Phone size={35} color="#fff"/>Telefones</TitleText>
  
              <div>
                <TextRegular color="white"><strong>Macaé:</strong>{' '}
                  <a href="tel:+552227626481">(22) 2762-6481</a> / {' '}
                  <a href="tel:+55222762-925">(22) 2762-2925</a>
                </TextRegular>
  
                <TextRegular color="white"><strong>Cabo Frio:</strong>{' '}
                <a href="tel:+552227626481">(22) 2762-6481</a> / {' '}
                <a href="tel:+55222762-925">(22) 2762-2925</a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>

            <ContentEmailAndWhatsapp>
              <TitleText size="s" color="white"><Envelope size={35} color="#fff"/>E-mail</TitleText>
  
              <div>
                <TextRegular color="white"><strong>Macaé:</strong>{' '}
                  <a href="mailto:orcamento@farmaciaaguaviva.com">
                    orcamento@farmaciaaguaviva.com
                  </a>
                </TextRegular>
  
                <TextRegular color="white"><strong>Cabo Frio:</strong>{' '}
                  <a href="mailto:aguavivacf@farmaciaaguaviva.com">
                    aguavivacf@farmaciaaguaviva.com
                  </a>
                </TextRegular>
              </div>
            </ContentEmailAndWhatsapp>
          </ContainerEmailAndWhatsapp>

          <ContentForm>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="Email" />
            <Input type="tel" placeholder="Telefone" />
            <TextArea placeholder="Digite sua dúvida...." />
            <Button bgColor="white" btnLarge={false} >Enviar</Button>
          </ContentForm>
        </ContentInfo>
      </ContentContact>
      
    </ContainerContact>
  )
}

