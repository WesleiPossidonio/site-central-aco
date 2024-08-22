
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDown } from "@phosphor-icons/react";
import { TitleText } from "../../../../components";
import ImageFaq from '../../../../assets/ImageFaq.svg'

import {
  AccordionContent,
  ContainerFaq,
  ContainerTitle,
  ContentAcordion,
  ContentFaq,
  ImgFaq
} from "./styled"

export const Faq = () => {
  return (
    <ContainerFaq>
      <ContainerTitle>
        <TitleText size='s' color='bg'>FAQ</TitleText>
        <TitleText size="l">Principais Dúvidas</TitleText>
      </ContainerTitle>

      <ContentFaq>
        <ImgFaq src={ImageFaq} alt="" />

        <ContentAcordion>
          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Quais tipos de aço vocês fornecem?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Oferecemos uma ampla variedade de aços, incluindo aços carbono, 
                inoxidáveis, galvanizados, laminados a quente e a frio, além de 
                ligas especiais. Nossos produtos são customizáveis conforme a 
                necessidade do seu projeto.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como funciona o processo de corte sob medida?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O processo de corte sob medida começa com a especificação exata 
                das dimensões e características que você precisa. Utilizamos 
                tecnologia de corte avançada, como corte a laser, plasma e 
                oxicorte, para garantir precisão e qualidade em cada peça.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como faço para solicitar um medicamento manipulado?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Você pode solicitar um medicamento manipulado através de receita
                médica, entregando-a diretamente na farmácia de manipulação ou
                enviando-a por e-mail. Nossa equipe entrará em contato para
                confirmar os detalhes da sua prescrição.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Qual é o prazo de entrega para pedidos personalizados?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O prazo de entrega varia de acordo com a complexidade do pedido 
                e a quantidade solicitada. Em média, entregamos pedidos 
                personalizados em um prazo de 7 a 14 dias úteis, 
                após a confirmação do pedido.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </ContentAcordion>
      </ContentFaq>
    </ContainerFaq>
  )
}

