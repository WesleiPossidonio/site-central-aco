import styled from "styled-components";

export const ContainerCallAction = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 3rem;

  @media (max-width: 768px) {
    height: max-content;
  }
`;

export const ContentCallAction = styled.div`
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors["base-bg"]};
  position: relative;

  @media (max-width: 768px) {
    height: max-content;
    flex-wrap: wrap;
    gap: 8rem;
    padding: 0 2rem;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  button {
    margin-top: 1rem;
  }

  @media(max-width: 768px){
   margin-top: 5rem;
  }
`;

export const Image = styled.img`
  width: min(45rem, 43vw);
  margin-top: -6.3rem;

  @media(max-width: 768px){
    width: min(45rem, 80vw);
  }
`;
