import styled from "styled-components";

export const ContainerCallAction = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
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
`;

export const Image = styled.img`
  width: 45rem;
  margin-top: -6.3rem;
`;
