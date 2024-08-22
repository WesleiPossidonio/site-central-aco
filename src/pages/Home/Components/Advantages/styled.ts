import styled from "styled-components";

export const ContainerAdvantages = styled.section`

  width: 100%;
  max-width: 112.5rem;
  height: 45rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  margin: 0 auto;
  padding: 3rem;

  @media (max-width: 696px) {
    height: max-content;
    flex-wrap: wrap;
    gap: 9rem;
    margin-bottom: 7rem 0;

    padding: 2rem;
  }
`;

export const ContentText = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  p {
    margin-top: 0.4rem;
  }

  // estilização do title
  span {
    font-size: 2.5rem;
    opacity: 0.4;
  }

  .title {
    font-size: 1.8rem;
    top: 0.65rem;
  }

  @media (max-width: 696px) {
    width: 100%;
  }
`;

export const ListAdvantages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 696px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

`;

export const AdvantageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.3rem;
  
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

export const ContentImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;

  position: relative;

  @media (max-width: 696px) {
    width: 100%;
    gap: 1rem;
  }
`;

interface BoxImageProps {
  widthImage: "imgOne" | "imgTwo";
}

export const BoxImage = styled.div<BoxImageProps>`
  width: ${({ widthImage }) => (widthImage === "imgOne" ? "16rem" : "14rem")};
  height: ${({ widthImage }) => (widthImage === "imgOne" ? "14rem" : "24rem")};
  margin-top: ${({ widthImage }) => (widthImage === "imgOne" ? "-11rem" : "0")};
  background-color: ${({ theme }) => theme.colors["base-bg"]};

  @media (max-width: 768px) {
    width: ${({ widthImage }) =>
      widthImage === "imgOne" ? "min(10rem, 40vw)" : "min(10rem, 35vw)"};
    height: ${({ widthImage }) =>
      widthImage === "imgOne" ? "9rem" : "18rem"};
  }
`;

export const ImgOne = styled.img`
  width: 100%;
  height: 100%;

  margin: -2rem -1.6rem -1.6rem -1.6rem;
  object-fit: cover;

  border: none;
  border-radius: 6px;

  @media (max-width: 768px) {
    margin: -3rem -1.6rem -1.6rem -1.6rem;
  }

  @media (max-width: 405px) {
    margin: -2.2rem -1.6rem -1.6rem -1.6rem;
  }
`;

export const ImgTwo = styled.img`
  width: 100%;
  height: 24rem;

  object-fit: cover;

  margin: 1.8rem;
  border: none;
  border-radius: 6px;

  @media (max-width: 768px) {
    height: 20rem;
  }
`;

export const BoxNumber = styled.div`
  width: 13.5rem;
  height: 9rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  text-align: center;
  border: 0;
  border-radius: 6px;

  position: absolute;
  top: 14.5rem;
  right: 10.1rem;

  animation: moveY 4s ease-in-out infinite;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${({ theme }) => theme.colors["base-white"]};

  @media (max-width: 768px) {
    width: 11.5rem;
    height: 8rem;

    top: 12.2rem;
    right: 6.1rem;
  }

  @media (max-width: 696px) {
    right: 31%;
  }
`;
