
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
          <Accordion defaultExpanded>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>O que é uma farmácia de manipulação?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Uma farmácia de manipulação é um estabelecimento
                onde os medicamentos são preparados de forma personalizada,
                conforme prescrição médica, ajustados às necessidades
                individuais de cada paciente.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Quais são as vantagens dos medicamentos manipulados?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Os medicamentos manipulados oferecem vantagens como
                personalização das dosagens e ingredientes, adaptação às
                necessidades específicas do paciente, e possibilidade de
                combinação de diferentes substâncias em uma única formulação.
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
              <Typography>Os medicamentos manipulados são seguros?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, os medicamentos manipulados são seguros quando preparados
                por farmácias de manipulação regulamentadas e que seguem as boas
                práticas de manipulação estabelecidas pela legislação sanitária.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Quanto tempo leva para preparar um medicamento manipulado?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O tempo de preparo pode variar de acordo com a complexidade da
                fórmula e a demanda da farmácia, geralmente podendo levar de
                algumas horas a alguns dias.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>
                Quanto tempo leva para preparar um medicamento manipulado?
              </Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O tempo de preparo pode variar de acordo com a complexidade da
                fórmula e a demanda da farmácia, geralmente podendo levar de
                algumas horas a alguns dias.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </ContentAcordion>
      </ContentFaq>
    </ContainerFaq>
  )
}

