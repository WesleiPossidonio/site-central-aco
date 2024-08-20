import styled from "styled-components";

export const ContainerCallAction = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 35rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: 1.5rem;
`;

export const ContentCallAction = styled.div`
  width: 85%;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
 

  padding: 3rem;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors["base-bg"]};
  position: relative;
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

  @media (max-width: 500px) {
    h1 {
      font-size: min(1.8rem, 5.8vw);
    }
  }
`;
