import styled from "styled-components";

export const ContainerAboutService = styled.section`
  width: 100%;
  max-width: 110rem;
  height: 35rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  padding: 3rem;

  @media (max-width: 667px) {
  padding: 1.5rem;
  }
`;

export const StyleImg = styled.div`
  width: min(30rem, 37vw);

  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors["base-bg"]};

  /* @media (max-width: 667px) {
    width: 22rem;
    order: 2;
  } */

    @media (max-width: 667px) {
    display: none;
  }
`;

export const ImageService = styled.img`
  width: 100%;
  border: none;
  border-radius: 12px;

  margin: 1.8rem 0 -1.8rem 1.8rem;
`;

export const ContentText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  span {
    font-size: 2rem;
  }

  h1 {
    top: 0.7rem;
    left: 0.8rem;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
