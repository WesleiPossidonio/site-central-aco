import styled from "styled-components";

export const ContainerMeasurements = styled.section`
  width: 100%;
  max-width: 110rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 3rem;

  @media (max-width: 726px) {
    padding: 1.5rem;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  #text {
    margin-top: 1rem;
  }

  // estilização do title e subTitle

  h1 {
    font-size: 1.8rem;
    top: 1.4rem;
    left: 1.2rem;
  }
`;

export const MeasurementContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const Selected = styled.select`
width: 18rem;
margin-top: 1.2rem;
padding: 1rem;

border: none;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
