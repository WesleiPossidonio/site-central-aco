import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled as muiStyled } from "@mui/material/styles";

export const ContainerFaq = styled.section`
  width: 100%;
  max-width: 112.5rem;
  height: 48rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  margin: 0 auto;
  padding: 3rem 4rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

export const ContentFaq = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ImgFaq = styled.img`
  width: 50%;
`;

export const ContentAcordion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const AccordionContent = muiStyled(AccordionSummary)({
  borderRadius: "8px",

  "&:focus": {
    backgroundColor: "#023345",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
  },
});
