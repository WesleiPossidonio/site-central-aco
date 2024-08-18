import styled from "styled-components";

export const ContainerAboutService = styled.section`
  width: 100%;
  max-width: 110rem;
  height: 35rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 3rem;
`;

export const StyleImg = styled.div`
  width: 30rem;

  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors["base-bg"]};
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
`;
