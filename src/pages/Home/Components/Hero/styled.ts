import styled from "styled-components"
import { SwiperSlide } from 'swiper/react';

export const ContainerMain = styled.section`
width: 100%;
height: 100vh;

.mySwiper {
  width: 100%;
  height: 100vh;
}
`

export const ContentSwiper = styled(SwiperSlide)`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contentTextCenter{
    width: 60%;
    align-items: center;
    left: 20%;
    text-align: center;
  }
`

export const ImgBanner = styled.img`
width: 100%;
height: 100vh;

object-fit: cover;
z-index: 1;
filter: brightness(0.5);
`

export const ContentText = styled.div`
width: 50%;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;

position: absolute;
top: 40%;
left: 6%;
z-index: 1;
`