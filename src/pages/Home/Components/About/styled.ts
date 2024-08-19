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
    left: min(-2.2rem, 2vw);
  }

  @media (max-width: 767px) {
    width: 100%;
    order: 2;

    span {
      left: 15%;
    }
  }
`;

export const ImgAbout = styled.img`
  width: min(25rem, 26vw);
  height: 26rem;
  object-fit: cover;

  margin-bottom: 6rem;
  border: none;
`;

export const ImgAboutBotton = styled.img`
  width: min(18rem, 30vw);
  height: 20rem;
  object-fit: cover;

  position: absolute;
  top: 46%;
  right: 49%;

  border: 10px solid #fff;
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
