import styled from "styled-components";

export const ContainerBarsInGeneral = styled.section`
width: 100%;
display: flex;
flex-direction: column;

`;


export const MeasurementsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 2rem;

  padding: 3rem;
`


export const MeasurementContent = styled.div`
width: 40%;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;

// estilização do title e subTitle
span {
  font-size: 2.3rem;
}

h1 {
  font-size: 1.5rem;
  top: 1.1rem;
  left: 1.2rem
}
`

export const TableSelected = styled.div`
width: 100%;
padding: 1.2rem;

display: flex;
justify-content: space-between;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;
border-radius: 6px;

box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
background-color: ${({theme}) => theme.colors["base-gray"]};

&:hover {
  background-color: ${({theme}) => theme.colors["base-bg"]};

 p, svg {
  color: ${({theme}) => theme.colors["base-white"]};
 } 
}

`

