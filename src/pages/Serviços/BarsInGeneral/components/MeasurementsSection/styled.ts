import styled from "styled-components";

export const ContainerMeasurements = styled.div`
  width: 90%;
  max-width: 110rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  margin: 0 auto;
  padding: 3rem;
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

// export const TableSelected = styled.div`
// width: 100%;
// padding: 1.2rem;

// display: flex;
// justify-content: space-between;
// align-items: center;

// cursor: pointer;
// transition: all 0.3s ease;
// border-radius: 6px;

// box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
// background-color: ${({theme}) => theme.colors["base-gray"]};

// &:hover {
//   background-color: ${({theme}) => theme.colors["base-bg"]};

//  p, svg {
//   color: ${({theme}) => theme.colors["base-white"]};
//  }
// }


// @media (max-width: 768px) {
//     display: none;
//   }
// `

export const Selected = styled.select`
width: 18rem;
margin-top: 1.2rem;
padding: 1rem;

border: none;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
