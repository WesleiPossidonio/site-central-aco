import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const ContainerSectionServices = styled.section`
  width: 100%;
  height: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  background-color: ${({ theme }) => theme.colors["base-bg"]};

  .mySwiper {
    width: 100%;
    height: 21rem;
    margin: 4.125rem;
  }
`;

export const Header = styled.div`
width: 50%;
align-self: flex-start;
position: relative;

display: flex;
flex-direction: column;
`

export const CardSwiper = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: ${({ theme }) => theme.colors["base-white"]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem;
  border: none;
  border-radius: 6px;

  position: relative;
  cursor: pointer;

  transition: 0.2s ease-in;

  h1, p, a {
    align-self: flex-start;
    text-align: start;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.img`
  width: 4rem;
  align-self: flex-start;
  color: red;
`;

export const ContentTextCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 0.8rem;

margin-top: 1.1rem;

a {
  font-weight: 500;
  color: ${({ theme }) => theme.colors["base-bg"]};
  margin-top: -0.2rem;
}
`
