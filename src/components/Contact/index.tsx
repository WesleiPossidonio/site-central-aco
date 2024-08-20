
import { MapPinArea, Phone, Envelope } from "@phosphor-icons/react"
import ReCAPTCHA from 'react-google-recaptcha'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import * as zod from 'zod'
import AOS from 'aos'


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

import { Button, TextRegular, TitleText, Input } from ".."
import 'aos/dist/aos.css';

import api from "../../Services/api"

const sendEmailFormSchema = zod.object({
  name: zod.string().min(3, 'Por gentileza, digite o seu nome'),
  email: zod.string().email('Por gentileza, digite o seu email corretamente'),
  phone: zod
    .string()
    .min(11, 'Por gentileza, digite o nemuro de telefone corretamente')
    .max(11, 'Por gentileza, digite o numero sem caractere'),
  subject_text: zod.string().min(3, 'Digite sua dúvida'),
  subject_title: zod.string().min(3, 'Digite sua dúvida'),
})

type createSendEmailFormInputs = zod.infer<typeof sendEmailFormSchema>
export const Contact = () => {
  const [captcha, setCaptcha] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createSendEmailFormInputs>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  useEffect(() => {
    AOS.init()
  }, [])

  const handleSendEmail = async (data: createSendEmailFormInputs) => {
    const { email, name, phone, subject_text, subject_title } = data

    const dataSendEmail = {
      email,
      name,
      phone,
      subject_text,
      subject_title
    }

    reset()

    if (!captcha) {
      toast.error("Captcha pendente!", {
        position: "top-left"
      })
    }

    try {
      await toast.promise(api.post('sendMail', dataSendEmail), {
        pending: 'Verificando seus dados',
        success: 'Dúvida enviada com sucesso!',
        error: 'Verifique seus dado e faça novamente! 🤯',
      })
    } catch (error) {
      console.log(error)
    }

  }

  const handleCapcha = (token: string | null) => {
    if (token !== null) {
      setCaptcha(token)
    }
  }



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
              <TitleText size="s" color="white"><Phone size={35} color="#fff" />Telefones</TitleText>

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
              <TitleText size="s" color="white"><Envelope size={35} color="#fff" />E-mail</TitleText>

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

          <ContentForm onSubmit={handleSubmit(handleSendEmail)}>
            <Input
              type="text"
              placeholder="Nome"
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              type="text"
              placeholder="Email"
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              type="tel"
              placeholder="Telefone"
              {...register('phone')}
              error={errors.phone?.message}
            />
            <Input
              type="text"
              placeholder="Assunto"
              {...register('subject_title')}
              error={errors.subject_title?.message}
            />
            <TextArea
              placeholder="Digite sua dúvida...."
              {...register('subject_text')}
              error={errors.subject_text?.message}
            />

            <ReCAPTCHA
              sitekey={import.meta.env.RECAPTCHA_KEY}
              onChange={handleCapcha}
              id="reCaptcha"
            />
            <Button bgColor="white" btnLarge={false}>Enviar</Button>
          
          </ContentForm>

        </ContentInfo>
      </ContentContact>

    </ContainerContact>
  )
}


