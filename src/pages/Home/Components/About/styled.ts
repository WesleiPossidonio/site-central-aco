import styled from "styled-components";

export const ContainerAbout = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;

  margin: 0 auto;

  @media (max-width: 767px) {
    height: max-content;
    flex-direction: column;
    gap: 5rem;
    padding: 1.5rem;
    margin-top: 3rem;

  }
`;

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  span {
    position: absolute;
    transform: rotate(-90deg);
    top: 10%;
    left: -3rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    order: 2;
    margin-left: 4rem;
    margin-bottom: 3rem;

    span {
      left: 5rem;
    }
  }

  @keyframes moveY {
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateY(-5px);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateY(-10px);
    animation-timing-function: ease-out;
  }
  75% {
    transform: translateY(-5px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }


}
`;

export const ImgAbout = styled.img`
  width: min(19.3rem, 55vw);
  height: 26rem;
  object-fit: cover;

  margin-bottom: 6rem;
  border: none;

  @media (max-width: 768px) {
    height: 23rem;
  }

  animation: moveY 5s ease-in-out infinite;
`;

export const ImgAboutBotton = styled.img`
  width: min(16.5rem, 50vw);
  height: 20rem;
  object-fit: cover;

  position: absolute;
  top: 46%;
  right: 49%;
  animation: moveY 3s ease-in-out infinite;

  border: 10px solid #fff;

  @media (max-width: 768px) {
    height: 18.5rem;
  }

`;

export const ContainerTextAbout = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  // estilização do title
  span {
    font-size: 2rem;
    opacity: 0.4;
  }

  .title {
    font-size: 1.5rem;
    top: 0.65rem;
  }

  button {
    margin-top: 1rem;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

